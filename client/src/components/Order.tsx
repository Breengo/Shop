import { changeOrder, changeOrderDirection } from "@/redux/slices/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

const ORDER_LIST = ["Alphabet", "Price", "Date"];

const Order = () => {
  const orderedBy = useAppSelector((state) => state.order.order);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col border border-neutral-800 rounded-md pt-6 w-80 h-fit ml-4">
      <h4 className="text-rose-400 text-3xl font-mono uppercase text-center font-bold mb-4">
        Order
      </h4>
      <ul className="w-full text-center rounded-b-md overflow-hidden">
        {ORDER_LIST.map((orderBy, index) => (
          <li
            key={index}
            onClick={() => {
              orderBy === orderedBy
                ? dispatch(changeOrderDirection())
                : dispatch(changeOrder(orderBy));
            }}
            className={
              "py-2 cursor-pointer text-xl text-white border-t border-neutral-800 " +
              (orderBy === orderedBy
                ? "bg-rose-500 hover:bg-rose-600 transition-all"
                : "hover:bg-neutral-800 ") +
              (index == ORDER_LIST.length - 1 ? "rounded-b" : "")
            }
          >
            {orderBy}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Order;
