import { STRIPE_API_KEY, STRIPE_WEBHOOK_SECRET } from "@/constants/constants";
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { AIRTABLE_API_KEY, AIRTABLE_APP_ID } from "./../../constants/constants";

const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: "2022-11-15",
});

const insertToAirtable = async ({
  name,
  message,
  coffees,
}: {
  name: string;
  message: string;
  coffees: number;
}) => {
  const url = `https://api.airtable.com/v0/${AIRTABLE_APP_ID}/Donations`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            name,
            message,
            coffees,
          },
        },
      ],
    }),
  });

  return response.json();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const signature = req.headers["stripe-signature"] as string;

  if (!signature) {
    return res.status(400).json({ message: "Missing signature" });
  }

  let event: Stripe.Event;

  const buf = await buffer(req);

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      signature,
      STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.log("🚀 ~ Invalid Signature", error);
    return res.status(400).json({ message: "Invalid signature" });
  }

  if (event.type !== "checkout.session.completed") {
    return res.status(400).json({ message: "Invalid event Type" });
  }

  const metadata = (
    event.data.object as {
      metadata: { name: string; message: string };
    }
  ).metadata;
  console.log("🚀 ~ file: checkout-complete.tsx:56 ~ metadata", metadata);

  const amount =
    ((
      event.data.object as {
        amount_total: number;
      }
    ).amount_total as number) / 100;

  await insertToAirtable({
    ...metadata,
    coffees: amount,
  });

  return res.status(200).json({ message: "Success" });
}
