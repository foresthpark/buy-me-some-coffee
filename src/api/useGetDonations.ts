import type { AirTableRecord } from "@/constants/types";
import axios from "axios";
import { useQuery } from "react-query";

const getDonations = async () => {
  const res = await axios.get("/api/donations");

  return res.data.data as AirTableRecord;
};

export const useGetDonations = () => {
  return useQuery("donations", getDonations);
};
