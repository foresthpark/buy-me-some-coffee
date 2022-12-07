import React from "react";
import Avatar from "../Avatar/Avatar";

export default function MyInfoCard() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Avatar />
      <h2 className="p-4 text-xl font-semibold">
        Buy Forest a coffee...or five 
      </h2>
    </div>
  );
}
