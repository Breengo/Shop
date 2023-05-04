import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Alert } from "@mui/material";
import { ICarsData } from "@/redux/slices/fetchCars";
import { IBikesData } from "@/redux/slices/fetchBikes";
import { IAircraftsData } from "@/redux/slices/fetchAircrafts";
import { addToCart } from "@/redux/slices/cartSlice";
import propertyChecker from "@/utils/propertyChecker";
import debounce from "lodash.debounce";
import { useAppDispatch } from "@/redux/store";

const DetailsPage = () => {
  const router = useRouter();
  let params = router.query.id;
  if (typeof params === "string") {
    params = params.split("-");
  }

  const dispatch = useAppDispatch();

  const [resData, setResData] = React.useState<
    ICarsData | IBikesData | IAircraftsData
  >();
  const resDataRef = React.useRef();
  const [properties, setProperties] = React.useState<string[]>([]);
  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    if (params) {
      axios
        .get(
          `http://localhost:3000/api/getDetails/?type=${params[0]}&&id=${params[1]}`
        )
        .then((res) => {
          setResData(res.data);
          resDataRef.current = res.data;
          setProperties(propertyChecker(res.data));
        });
    }
  }, []);

  const onBuy = React.useCallback(
    debounce(() => {
      setShowAlert(true);
      dispatch(addToCart(resDataRef.current));
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }, 500),
    []
  );

  return (
    <div className="w-full min-h-screen bg-neutral-900 flex justify-center relative">
      {showAlert && (
        <div className="absolute animate-in fade-in zoom-in duration-300 bottom-10 left-10">
          <Alert severity="success">
            This product has been added to your cart
          </Alert>
        </div>
      )}
      <button
        onClick={() => router.back()}
        className="absolute top-0 left-0 text-rose-500 text-xl border border-rose-500 rounded-md py-1 px-2 mt-8 ml-8 shadow-rose-500 shadow-inner hover:bg-rose-600 hover:text-white transition-all"
      >
        Back
      </button>
      <div className="w-8/12 mt-40 flex flex-col">
        <div className="w-full h-fit flex">
          <Image
            className="rounded-md"
            src={`/${resData?.image}` ?? "/car.jpg"}
            alt="error"
            height={500}
            width={800}
          />
          <div className="ml-12 w-full flex flex-col border border-neutral-800 py-4 px-12 rounded-md">
            <p className="text-white text-5xl font-bold w-full">
              {resData?.title}
            </p>
            <ul className="mt-8">
              {properties.map((property, index) => (
                <li className="text-white text-2xl mt-4 ml-4" key={index}>
                  {property}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border border-neutral-800 rounded-md p-4 text-white text-2xl">
          {`The mileage of this car is `}
          <span className="text-rose-400">{resData?.milleage}</span>
          {" kilometers"}
        </p>
        <p className="mt-4 border border-neutral-800 rounded-md p-4 text-white text-2xl">
          {`The release date of this model is `}
          <span className="text-rose-400">
            {resData?.timeStamp?.slice(0, 10).split("-").reverse().join("-")}
          </span>
        </p>
        <div className="flex justify-end">
          <p className="mt-4 w-fit border border-neutral-800 rounded-md p-4 text-white text-2xl text-right">
            {`Price: `}
            <span className="text-green-400">{resData?.price}$</span>
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onBuy}
            className=" text-2xl font-bold text-neutral-200 px-20 py-3 rounded-md border border-green-500 hover:bg-green-500 hover:text-white hover:scale-105 transition-all"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
