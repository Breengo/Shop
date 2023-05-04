import { IAircraftsData } from "@/redux/slices/fetchAircrafts";
import { IBikesData } from "@/redux/slices/fetchBikes";
import { ICarsData } from "@/redux/slices/fetchCars";
import propertyChecker from "@/utils/propertyChecker";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface BoxProps {
  data: ICarsData | IBikesData | IAircraftsData;
  cartVersion?: boolean;
}
const ProductBox: React.FC<BoxProps> = ({ data, cartVersion }) => {
  const router = useRouter();
  const currentPage = router.pathname.slice(
    router.pathname.indexOf("/") + 1,
    router.pathname.lastIndexOf("/")
  );

  const properties = propertyChecker(data);

  return (
    <Link
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
        cartVersion ? e.preventDefault() : ""
      }
      href={`/details/${currentPage}-${data.id}`}
      className="w-full animate-in fade-in duration-1000"
    >
      <div
        className={
          "border-t border-t-neutral-800 w-full py-10 px-8 cursor-pointer transition rounded-md" +
          (cartVersion
            ? " hover:bg-rose-500"
            : " hover:bg-neutral-800 hover:scale-105")
        }
      >
        <div className="flex">
          <Image
            className="rounded-md w-96 h-60"
            src={`/${data.image}`}
            alt="error"
            height={200}
            width={400}
          />
          <div className="text-3xl ml-8 w-full relative">
            <div>
              <h3 className="text-white font-bold">{data.title}</h3>
              <ul className="text-xl text-neutral-100 mt-2 flex flex-wrap">
                {properties.map((property, index) => (
                  <li
                    key={index}
                    className="p-2 border-neutral-700 border rounded-md m-2"
                  >
                    {property}
                  </li>
                ))}
              </ul>
            </div>
            <p className="absolute text-lg left-0 bottom-0 text-neutral-500 rounded-xl p-2">
              {data.milleage}
              <span> KM</span>
            </p>
            <p className="absolute right-0 bottom-0 text-rose-500 rounded-xl p-2">
              {data.price}$
            </p>
            <p className="absolute right-0 top-0 text-neutral-600 rounded-xl text-lg">
              {data.timeStamp.slice(0, 4)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
