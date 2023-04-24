import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { clearFilters } from "@/redux/slices/filterSlice";
import { resetOrder } from "@/redux/slices/orderSlice";
import { useRouter } from "next/router";
import { fetchBikes } from "@/redux/slices/fetchBikes";
import ProductsPage from "@/components/ProductsPage";
import useFilter from "@/hooks/useFilter";

const Bikes = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { pid } = router.query;

  const orderOptions = useAppSelector((state) => state.order);
  const filterOptions = useAppSelector((state) => state.filter);
  let isLoading = useAppSelector((state) => state.bikes.loading);
  let products = useAppSelector((state) => state.bikes.data);

  let tempArr = useFilter(orderOptions, products);
  products = tempArr.filter(
    (product, index) =>
      index < Number(pid) * 5 && index > (Number(pid) - 1) * 5 - 1
  );

  let reqParams = "";
  React.useEffect(() => {
    reqParams += `?bottomPrice=${filterOptions.price[0]}&&upperPrice=${filterOptions.price[1]}`;
    filterOptions.options.forEach((option, index) => {
      let optionName = option.split(":")[0];
      let optionValue = option.split(":")[1];
      reqParams += `&&${optionName}=${optionValue}`;
    });
    if (!filterOptions.milleage) {
      reqParams += `&&milleage=false`;
    }
    dispatch(fetchBikes(reqParams));
  }, [filterOptions]);

  React.useEffect(() => {
    dispatch(clearFilters());
    dispatch(resetOrder());
  }, []);
  return <ProductsPage isLoading={isLoading} products={products} />;
};
export default Bikes;
