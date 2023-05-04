import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { clearFilters } from "@/redux/slices/filterSlice";
import { resetOrder } from "@/redux/slices/orderSlice";
import { useRouter } from "next/router";
import { fetchBikes } from "@/redux/slices/fetchBikes";
import ProductsPage from "@/components/ProductsPage";
import useFilter from "@/hooks/useFilter";
import useReqParams from "@/hooks/useReqParams";

const Bikes = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { pid } = router.query;

  const orderOptions = useAppSelector((state) => state.order);
  const filterOptions = useAppSelector((state) => state.filter);
  let isLoading = useAppSelector((state) => state.bikes.loading);
  let products = useAppSelector((state) => state.bikes.data);

  if (typeof pid === "string") {
    products = useFilter(orderOptions, products, pid);
  }

  React.useEffect(() => {
    const reqParams = useReqParams(filterOptions);
    dispatch(fetchBikes(reqParams));
  }, [filterOptions]);

  React.useEffect(() => {
    dispatch(clearFilters());
    dispatch(resetOrder());
  }, []);
  return <ProductsPage isLoading={isLoading} products={products} />;
};
export default Bikes;
