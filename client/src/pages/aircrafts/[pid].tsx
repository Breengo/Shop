import ProductBox from "@/components/ProductBox";
import React from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useAppDispatch } from "@/redux/store";
import { clearFilters } from "@/redux/slices/filterSlice";
import { resetOrder } from "@/redux/slices/orderSlice";

const Aircrafts = () => {
  const [products, setProducts] = React.useState([]);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(clearFilters());
    dispatch(resetOrder());
    axios
      .get("http://localhost:3000/api/getAircrafts/?page=1")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="">
      {products && products[0]
        ? products.map((item, index) => <ProductBox data={item} key={index} />)
        : [1, 2, 3, 4, 5].map((item, index) => (
            <div className="border-t border-t-neutral-800 w-full rounded-md overflow-hidden">
              <Skeleton
                sx={{ backgroundColor: "rgb(38 38 38)" }}
                key={index}
                variant="rounded"
                width={2000}
                height={300}
              />
            </div>
          ))}
    </div>
  );
};
export default Aircrafts;
