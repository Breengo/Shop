// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cars from "./db/cars";

type Data = {
  title: string;
  fuel: string;
  transmission: string;
  engine: string;
  drivetrain: string;
  interiorColor: string;
  exteriorColor: string;
  price: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const { page } = req.query;

  res.status(200).json(cars.slice(Number(page) * 5 - 5, Number(page) * 5));
}
