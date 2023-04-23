import ProductBox from "@/components/ProductBox";
import { fetchCars } from "@/redux/slices/fetchProducts";
import { clearFilters } from "@/redux/slices/filterSlice";
import { resetOrder } from "@/redux/slices/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Cars = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { pid } = router.query;

  const orderOptions = useAppSelector((state) => state.order);
  const filterOptions = useAppSelector((state) => state.filter);
  let isLoading = useAppSelector((state) => state.products.loading);

  let products = useAppSelector((state) => state.products.data);
  let tempARr = [...products];

  switch (orderOptions.order) {
    case "Alphabet":
      tempARr.sort((productA, productB) => {
        if (orderOptions.direction === "ASC") {
          if (productA.title.toLowerCase() > productB.title.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        } else {
          if (productA.title.toLowerCase() > productB.title.toLowerCase()) {
            return 1;
          } else {
            return -1;
          }
        }
      });
      break;
    case "Price":
      tempARr.sort((productA, productB) => {
        if (orderOptions.direction === "ASC")
          return productA.price - productB.price;
        else return productB.price - productA.price;
      });
      break;
    case "Date":
      tempARr.sort((productA, productB) => {
        if (orderOptions.direction === "ASC")
          return (
            new Date(productA.timeStamp).getTime() -
            new Date(productB.timeStamp).getTime()
          );
        else
          return (
            new Date(productB.timeStamp).getTime() -
            new Date(productA.timeStamp).getTime()
          );
      });
      break;
  }

  products = tempARr.filter(
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
    dispatch(fetchCars(reqParams));
  }, [filterOptions]);

  React.useEffect(() => {
    dispatch(clearFilters());
    dispatch(resetOrder());
  }, []);

  return (
    <div>
      <div>
        {!isLoading &&
          products[0] &&
          products.map((item, index) => <ProductBox data={item} key={index} />)}

        {!isLoading && !products[0] && (
          <div className="h-96 flex items-center justify-center border-t border-neutral-800 rounded-md text-5xl text-rose-600 uppercase">
            No products
          </div>
        )}
        {isLoading &&
          [1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="border-t border-t-neutral-800 w-full rounded-md overflow-hidden"
            >
              <Skeleton
                sx={{ backgroundColor: "rgb(38 38 38)" }}
                variant="rounded"
                width={2000}
                height={300}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Cars;
