// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bikes from "./db/bikes";

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

  res.status(200).json(bikes);
}
