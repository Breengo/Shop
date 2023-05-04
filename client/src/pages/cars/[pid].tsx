import ProductsPage from "@/components/ProductsPage";
import useFilter from "@/hooks/useFilter";
import useReqParams from "@/hooks/useReqParams";
import { fetchCars } from "@/redux/slices/fetchCars";
import { clearFilters } from "@/redux/slices/filterSlice";
import { resetOrder } from "@/redux/slices/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/router";
import React from "react";

const Cars = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { pid } = router.query;

  const orderOptions = useAppSelector((state) => state.order);
  const filterOptions = useAppSelector((state) => state.filter);
  let isLoading = useAppSelector((state) => state.cars.loading);
  let products = useAppSelector((state) => state.cars.data);

  if (typeof pid === "string") {
    products = useFilter(orderOptions, products, pid);
  }

  React.useEffect(() => {
    const reqParams = useReqParams(filterOptions);
    dispatch(fetchCars(reqParams));
  }, [filterOptions]);

  React.useEffect(() => {
    dispatch(clearFilters());
    dispatch(resetOrder());
  }, []);

  return <ProductsPage isLoading={isLoading} products={products} />;
};
export default Cars;
