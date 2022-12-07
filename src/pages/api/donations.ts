import type { AirTableRecord } from "@/constants/types";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { AIRTABLE_API_KEY, AIRTABLE_APP_ID } from "./../../constants/constants";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const response = await axios.get(
    `https://api.airtable.com/v0/${AIRTABLE_APP_ID}/Donations?maxRecords=3&view=Grid%20view`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    }
  );

  const data: AirTableRecord = response.data;

  return res.status(200).json({ data });
}
