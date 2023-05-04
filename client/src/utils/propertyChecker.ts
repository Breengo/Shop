import { IAircraftsData } from "@/redux/slices/fetchAircrafts";
import { IBikesData } from "@/redux/slices/fetchBikes";
import { ICarsData } from "@/redux/slices/fetchCars";

const propertyChecker = (data: ICarsData | IBikesData | IAircraftsData) => {
  const properties = [];
  const NOT_PROPERTIES = [
    "id",
    "title",
    "timeStamp",
    "image",
    "price",
    "milleage",
  ];
  for (let key in data) {
    if (!NOT_PROPERTIES.includes(key)) {
      let temp = key
        .split("")
        .map((symb, index) => {
          if (index === 0) {
            return symb.toUpperCase();
          } else {
            if (symb.toUpperCase() === symb) {
              return ` ${symb.toLowerCase()}`;
            } else {
              return symb;
            }
          }
        })
        .join("");
      properties.push(`${temp}: ${data[key as keyof typeof data]}`);
    }
  }
  return properties;
};

export default propertyChecker;
