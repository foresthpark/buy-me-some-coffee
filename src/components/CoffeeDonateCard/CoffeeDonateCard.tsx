import { ONE_COFFEE_PRICE } from "@/constants/constants";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NumberCircle from "../NumberCircle/NumberCircle";

const amounts = [1, 3, 5];

export interface CoffeeDonateFormProps {
  coffees: number;
  message: string;
  name: string;
}

export default function CoffeeDonateCard() {
  const [isSelected, setIsSelected] = useState(1);
  const [currentCoffees, setCurrentCoffees] = useState(1);

  const { register, handleSubmit, setValue, getValues } =
    useForm<CoffeeDonateFormProps>({
      defaultValues: {
        coffees: 1,
      },
    });

  const onSubmit = (data: CoffeeDonateFormProps) => {
    console.log("🚀 ~ file: CoffeeDonateCard.tsx:26 ~ onSubmit ~ data", data);
  };

  const handleCoffeesChange = (numOfCoffees: number) => {
    setCurrentCoffees(numOfCoffees);
    setValue("coffees", numOfCoffees);
    setIsSelected(numOfCoffees);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4 p-4">
        <h2 className="text-xl font-semibold">
          Buy Forest a coffee...or five 
        </h2>
        <div className="flex flex-row items-center justify-center space-x-3 rounded-lg border-[0.4px] border-green-400 bg-green-100 py-6">
          <span className="text-5xl">☕️</span>
          <span>x</span>

          {amounts.map((amount) => (
            <NumberCircle
              key={amount}
              number={amount}
              isSelected={currentCoffees === amount}
              handleCoffeesChange={handleCoffeesChange}
            />
          ))}
          <div>
            <input
              {...register("coffees")}
              onChange={(e) => {
                setCurrentCoffees(Number(e.target.value));
                setValue("coffees", Number(e.target.value));
              }}
              className="h-10 w-10 rounded-lg border border-solid border-green-300 p-2 text-center text-black"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 pt-4">
          <input
            {...register("name")}
            className="w-full rounded-lg border border-solid border-green-300 p-3 text-left text-black"
            placeholder="Name (optional)"
          />
          <textarea
            {...register("message")}
            rows={4}
            className="w-full rounded-lg border border-solid border-green-300 p-3 text-left text-black focus:border-green-300 focus:ring-green-300"
            placeholder="Send me a message (optional)"
          />
          <button className="w-full rounded-full bg-green-500 p-3 font-semibold text-white">
            Support ${(Number(currentCoffees) * ONE_COFFEE_PRICE) / 100}
          </button>
        </div>
      </div>
    </form>
  );
}
