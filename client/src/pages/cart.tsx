import ProductBox from "@/components/ProductBox";
import { removeFromCart } from "@/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/router";
import React from "react";

const Cart = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const cartData = useAppSelector((state) => state.cart.cart);

  return (
    <div className="w-full min-h-screen bg-neutral-900 relative pb-20">
      <button
        onClick={() => router.back()}
        className="absolute top-0 left-0 text-rose-500 text-xl border border-rose-500 rounded-md py-1 px-2 mt-8 ml-8 shadow-rose-500 shadow-inner hover:bg-rose-600 hover:text-white transition-all"
      >
        Back
      </button>
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-white text-5xl font-bold w-full text-center">
          Cart
        </h1>
        <div className="border border-neutral-800 w-6/12 rounded-md my-12">
          {cartData.map((data, index) => (
            <div key={index} onClick={() => dispatch(removeFromCart(index))}>
              <ProductBox cartVersion={true} data={data} />
            </div>
          ))}
        </div>
        <p className="text-white text-2xl border border-neutral-800 rounded-md p-4">
          The total cost of goods in the basket is
          <span className="ml-2 text-green-500">
            {cartData.reduce((prev, current) => prev + current.price, 0)}$
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
