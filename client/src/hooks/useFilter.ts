import { IAircraftsData } from "@/redux/slices/fetchAircrafts";
import { IBikesData } from "@/redux/slices/fetchBikes";
import { ICarsData } from "@/redux/slices/fetchCars";

interface IOrderOptions {
  direction: string;
  order: string;
}

function useFilter<T extends ICarsData | IBikesData | IAircraftsData>(
  orderOptions: IOrderOptions,
  tempArr: T[]
): T extends ICarsData
  ? ICarsData[]
  : T extends IBikesData
  ? IBikesData[]
  : T extends IAircraftsData
  ? IAircraftsData[]
  : never {
  let newArr = [...tempArr];
  switch (orderOptions.order) {
    case "Alphabet":
      tempArr.sort((productA, productB) => {
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
      tempArr.sort((productA, productB) => {
        if (orderOptions.direction === "ASC")
          return productA.price - productB.price;
        else return productB.price - productA.price;
      });
      break;
    case "Date":
      tempArr.sort((productA, productB) => {
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
  return newArr as any;
}

export default useFilter;
