import ProductBox from "@/components/ProductBox";
import { clearFilters } from "@/redux/slices/filterSlice";
import { resetOrder } from "@/redux/slices/orderSlice";
import { useAppDispatch } from "@/redux/store";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const Cars = () => {
  const [products, setProducts] = React.useState([]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  React.useEffect(() => {
    const { pid } = router.query;
    dispatch(clearFilters());
    dispatch(resetOrder());
    axios
      .get(`http://localhost:3000/api/getCars/?page=${pid}`)
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="">
      <div>
        {products && products[0]
          ? products.map((item, index) => (
              <ProductBox data={item} key={index} />
            ))
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
    </div>
  );
};
export default Cars;
