import { ONE_COFFEE_PRICE, STRIPE_API_KEY } from "@/constants/constants";
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const quantity = req.body.quantity || 1;
  const message = req.body.message || "";
  const name = req.body.name || "Anonymous";

  try {
    const session = await stripe.checkout.sessions.create({
      metadata: {
        name,
        message,
      },
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: "Donation Coffee",
            },
            unit_amount: ONE_COFFEE_PRICE,
          },
          quantity: quantity,
        },
      ],
      success_url: `${req.headers.origin}/thankyou`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    const url = session.url;

    if (url) {
      return res.status(200).json({ url });
    }
    return res.status(500).json({ message: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ message: "Error creating the session" });
  }

  return res.status(200).json({ message: "Hello World" });
}
