import type { NextApiRequest, NextApiResponse } from "next";
import cars from "./db/cars";

type Data = {
  pages: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { page } = req.query;
  switch (page) {
    case "cars":
      res.status(200).json({ pages: cars.length / 5 });
      break;
    case "bikes":
      res.status(200).json({ pages: cars.length / 5 });
      break;
    case "aircrafts":
      res.status(200).json({ pages: cars.length / 5 });
      break;
    default:
      res.status(400).json({ pages: 1 });
      break;
  }
}
