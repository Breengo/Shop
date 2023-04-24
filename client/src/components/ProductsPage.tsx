import ProductBox from "./ProductBox";
import { Skeleton } from "@mui/material";
import { IBikesData } from "@/redux/slices/fetchBikes";
import { ICarsData } from "@/redux/slices/fetchCars";
import { IAircraftsData } from "@/redux/slices/fetchAircrafts";

interface IProductsProps {
  isLoading: boolean;
  products: ICarsData[] | IBikesData[] | IAircraftsData[];
}

const ProductsPage: React.FC<IProductsProps> = ({ isLoading, products }) => {
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

export default ProductsPage;
