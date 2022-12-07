import type { Record } from "@/constants/types";
import DonationRecord from "../CoffeeDonateCard/DonationRecord/DonationRecord";

interface TimelineProps {
  records: Record[];
}

export default function Timeline({ records }: TimelineProps) {
  return (
    <div className="w-full space-y-4 p-4">
      {records.map((record) => (
        <DonationRecord key={record.id} record={record} />
      ))}
    </div>
  );
}
