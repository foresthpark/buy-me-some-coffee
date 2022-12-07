import { ONE_COFFEE_PRICE } from "@/constants/constants";
import type { Record } from "@/constants/types";
import React from "react";

interface DonationRecordProps {
  record: Record;
}

export default function DonationRecord({ record }: DonationRecordProps) {
  return (
    <div
      key={record.id}
      className="flex flex-row items-center space-x-2 rounded-lg border-[0.4px] border-green-300 p-3"
    >
      <div className="flex items-start justify-start text-4xl">
        <span>☕</span>
      </div>
      <div className="flex w-full flex-col space-y-2 pr-3">
        <span>
          <span className="font-semibold">{record.fields.name}</span>{" "}
          <span>
            bought{" "}
            <span className="font-semibold">
              {(Number(record.fields.coffees) / ONE_COFFEE_PRICE) * 100}
            </span>{" "}
            {(Number(record.fields.coffees) / ONE_COFFEE_PRICE) * 100 > 1
              ? "coffees"
              : "coffee"}
            .
          </span>
        </span>
        {record.fields.message && (
          <div className="w-full rounded-lg border-2 border-green-300 bg-green-100 p-3">
            {record.fields.message}
          </div>
        )}
      </div>
    </div>
  );
}
