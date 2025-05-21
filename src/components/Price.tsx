"use client";

import { useRouter } from "next/navigation";
import React, { useState, FC } from "react";

interface PriceProps {
  price: number;
  id: number;
  title: string;
  image: string;
}

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const Price: FC<PriceProps> = ({ price, id, title, image }) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleQuantityChange = (operation: "add" | "remove") => {
    if (operation === "add") {
      setQuantity((prev) => prev + 1);
    } else if (operation === "remove" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleBuy = () => {
    const cart = localStorage.getItem("cart");
    const parsedCart: CartItem[] = cart ? JSON.parse(cart) : [];

    const existingIndex = parsedCart.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      parsedCart[existingIndex].quantity += quantity;
    } else {
      parsedCart.push({ id, title, image, price, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(parsedCart));
    alert("Added to cart!");
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h2 className="text-2xl font-bold text-amber-900">
        ${(price * quantity).toFixed(2)}
      </h2>

      <div className="flex justify-between w-full p-3 ring-1 ring-amber-950 rounded-md">
        <span>Quantity</span>
        <div className="flex gap-4 items-center">
          <button onClick={() => handleQuantityChange("remove")}>➖</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange("add")}>➕</button>
        </div>
      </div>

      <button
        className="uppercase w-full bg-amber-950 text-white p-3 rounded-md ring-1 ring-amber-950"
        onClick={handleBuy}
      >
        BUY
      </button>
    </div>
  );
};

export default Price;