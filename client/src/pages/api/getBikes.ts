// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bikes from "../../db/bikes";

export type BikeData = {
  id: number;
  title: string;
  fuel: string;
  transmission: string;
  engine: string;
  finalDrive: string;
  color: string;
  image: string;
  price: number;
  milleage: number;
  timeStamp: Date;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BikeData[]>
) {
  const filter = req.query;

  if (filter) {
    res.status(200).json(
      bikes.filter((item) => {
        let optionMatch = 0;
        for (let key in filter) {
          let newKey = key.split(" ");
          newKey[0] = newKey[0].toLowerCase();
          if (newKey[1]) {
            newKey[1] = newKey[1][0].toUpperCase() + newKey[1].slice(1);
          }
          const option = filter[key];
          key = newKey.join("");
          if (item[key as keyof typeof item] === option) {
            optionMatch++;
          }
          if (key === "milleage" && item["milleage"] === 0) {
            optionMatch++;
          }
        }
        if (
          item.price < Number(filter["upperPrice"]) &&
          item.price > Number(filter["bottomPrice"])
        ) {
          optionMatch += 2;
        }
        if (optionMatch === Object.keys(filter).length) return true;
        else return false;
      })
    );
  } else {
    res.status(200).json(bikes);
  }
}
