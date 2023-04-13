import ProductBox from "@/components/ProductBox";
import axios from "axios";
import React from "react";

const Cars = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/getItems")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="flex">
      <div>
        {products &&
          products.map((item, index) => <ProductBox data={item} key={index} />)}
      </div>
    </div>
  );
};
export default Cars;
