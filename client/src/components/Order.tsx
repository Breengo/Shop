import { changeOrder, changeOrderDirection } from "@/redux/slices/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React from "react";

const ORDER_LIST = ["Alphabet", "Price", "Date"];

const Order = () => {
  const orderedBy = useAppSelector((state) => state.order.order);
  const direction = useAppSelector((state) => state.order.direction);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col border border-neutral-800 rounded-md 2xl:pt-6 pt-2 2xl:w-80 w-60 h-fit ml-4">
      <h4 className="text-rose-400 2xl:text-3xl text-lg uppercase text-center font-bold 2xl:mb-4 mb-1">
        Order
      </h4>
      <ul className="w-full flex flex-col items-center rounded-b-md overflow-hidden">
        {ORDER_LIST.map((orderBy, index) => (
          <li
            key={index}
            onClick={() => {
              orderBy === orderedBy
                ? dispatch(changeOrderDirection())
                : dispatch(changeOrder(orderBy));
            }}
            className={
              "flex items-center justify-center w-full py-2 cursor-pointer 2xl:text-xl text-sm text-white border-t border-neutral-800 " +
              (orderBy === orderedBy
                ? "bg-rose-500 hover:bg-rose-600 transition-all"
                : "hover:bg-neutral-800 ") +
              (index == ORDER_LIST.length - 1 ? "rounded-b" : "")
            }
          >
            <span className="mr-1">{orderBy}</span>
            {orderBy === orderedBy && direction === "DESC" && (
              <Image
                className="rotate-180"
                src="/arrows.svg"
                alt="error"
                width={25}
                height={25}
              />
            )}
            {orderBy === orderedBy && direction === "ASC" && (
              <Image src="/arrows.svg" alt="error" width={25} height={25} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Order;
