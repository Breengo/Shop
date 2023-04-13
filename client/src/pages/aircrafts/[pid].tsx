import ProductBox from "@/components/ProductBox";
import React from "react";
import axios from "axios";

const Aircrafts = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/getItems")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div>
      {products &&
        products.map((item, index) => <ProductBox data={item} key={index} />)}
    </div>
  );
};
export default Aircrafts;
