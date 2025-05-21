"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    const parsed: CartItem[] = stored ? JSON.parse(stored) : [];
    setCartItems(parsed);
  }, []);

  const updateQuantity = (index: number, change: number) => {
    const updated = [...cartItems];
    const newQuantity = updated[index].quantity + change;

    if (newQuantity < 1) {
      updated.splice(index, 1);
    } else {
      updated[index].quantity = newQuantity;
    }

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (index: number) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const subtotal = cartItems.reduce(
    (acc, item) => (acc + item.quantity * item.price),
    0
  );

  return (
    <div className="min-h-[80vh] p-6 lg:px-20 xl:px-40 bg-amber-50 text-amber-900">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-md shadow gap-4"
            >
              <div className="flex items-center gap-4 w-full md:w-1/3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p className="text-sm">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-1/3 justify-center">
                <button
                  onClick={() => updateQuantity(index, -1)}
                  className="px-3 py-1 bg-amber-200 hover:bg-amber-300 rounded"
                >
                  ➖
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(index, 1)}
                  className="px-3 py-1 bg-amber-200 hover:bg-amber-300 rounded"
                >
                  ➕
                </button>
              </div>

              <div className="flex items-center gap-4 w-full md:w-1/3 justify-end">
                <p className="font-bold">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(index)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 text-right space-y-4">
            <p className="text-xl font-semibold">
              Subtotal:{" "}
              {/* <span className="text-amber-700">${subtotal.toFixed(2)}</span> */}
              <span className="text-amber-700">${subtotal}</span>
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={clearCart}
                className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-900"
              >
                Clear Cart
              </button>
              <button className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-900">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;





// 


// import Image from 'next/image';
// import React from 'react'

// const CartPage = () => {
//   return (
//     <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh - 9rem)] flex flex-col text-amber-800 lg:flex-row'>
//       {/* Product Container*/}
//       <div className='h-1/2 p-4 flex flex-col justify-center bg-amber-50 overflow-scroll lg:h-full lg:w-2/3 lg:px-20 xl:px-40'>
//         {/* SINGLE ITEM */}
//         <div className='flex items-center justify-between mb-4'>
//           <Image src={FUTURE_EVENTS_DATA[1].image} alt="" width={100} height={100} className='object-cover rounded-lg' />
//           <div className=''>
//             <h1 className='uppercase text-xl font-bold'>Spring event</h1>
//             <span>VIP</span>
//           </div>
//           <h2 className='font-bold'>$200</h2>
//           <span className='cursor-pointer'>X</span>
//         </div>

//         <div className='flex items-center justify-between mb-4'>
//           <Image src={FUTURE_EVENTS_DATA[1].image} alt="" width={100} height={100} className='object-cover rounded-lg' />
//           <div className=''>
//             <h1 className='uppercase text-xl font-bold'>Spring event</h1>
//             <span>VIP</span>
//           </div>
//           <h2 className='font-bold'>$200</h2>
//           <span className='cursor-pointer'>X</span>
//         </div>
//         <div className='flex items-center justify-between mb-4'>
//           <Image src={FUTURE_EVENTS_DATA[1].image} alt="" width={100} height={100} className='object-cover rounded-lg' />
//           <div className=''>
//             <h1 className='uppercase text-xl font-bold'>Spring event</h1>
//             <span>VIP</span>
//           </div>
//           <h2 className='font-bold'>$200</h2>
//           <span className='cursor-pointer'>X</span>
//         </div>

//       </div>
//       {/* Payment Container*/}
//       <div className='h-1/2 p-4 bg-amber-100 flex flex-col justify-center gap-4 lg:h-full lg:w-1/3 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
//         <div className='flex justify-between'>
//           <span className=''>Subtotal (3 events acces)</span>
//           <span className=''>$600</span>
//         </div>
//         <hr className='' />
//         <button className='bg-amber-950 text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
//       </div>
//     </div>
//   )
// }

// export default CartPage;