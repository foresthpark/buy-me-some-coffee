import React from "react";
import type { Dispatch } from "react";
import type { UseFormSetValue } from "react-hook-form";
import type { CoffeeDonateFormProps } from "../CoffeeDonateCard/CoffeeDonateCard";

interface NumberCircleProps {
  isSelected: boolean;
  number: number;
  setValue: UseFormSetValue<CoffeeDonateFormProps>;
  setIsSelected: Dispatch<React.SetStateAction<number>>;
}

export default function NumberCircle({
  isSelected,
  number,
  setValue,
  setIsSelected,
}: NumberCircleProps) {
  const handleClick = () => {
    setValue("amount", number);
    setIsSelected(number);
  };
  return (
    <div
      className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-green-500 ${
        isSelected ? "bg-green-500" : "bg-white"
      }`}
      onClick={handleClick}
    >
      <span
        className={`text-lg font-semibold ${
          isSelected ? "text-white" : "text-green-700"
        }`}
      >
        {number}
      </span>
    </div>
  );
}
