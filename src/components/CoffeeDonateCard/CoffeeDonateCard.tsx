import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NumberCircle from "../NumberCircle/NumberCircle";

const amounts = [1, 3, 5];

export interface CoffeeDonateFormProps {
  amount: number;
  message: string;
  name: string;
}

export default function CoffeeDonateCard() {
  const [isSelected, setIsSelected] = useState(1);

  const { register, handleSubmit, setValue } = useForm<CoffeeDonateFormProps>({
    defaultValues: {
      amount: 1,
    },
  });

  return (
    <div>
      <h1>Buy Forest a coffee...or five </h1>
      <div className="flex flex-row items-center justify-center space-x-3 border-[0.4px] border-green-400 bg-green-100 py-6">
        <span className="text-5xl">☕️</span>
        <span>x</span>

        {amounts.map((amount) => (
          <NumberCircle
            key={amount}
            number={amount}
            setValue={setValue}
            setIsSelected={setIsSelected}
            isSelected={isSelected === amount}
          />
        ))}
        <form>
          <input
            {...register("amount")}
            className="h-10 w-10 rounded-lg border border-solid border-green-300 p-2 text-center text-black"
          />
          {/* <input {...register("message")} type="text" />
        <input {...register("name")} type="text" /> */}
        </form>
      </div>
    </div>
  );
}
