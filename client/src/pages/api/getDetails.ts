// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cars from "../../db/cars";
import bikes from "../../db/bikes";
import aircrafts from "../../db/aircrafts";
import { CarData } from "./getCars";
import { AircraftData } from "./getAircrafts";
import { BikeData } from "./getBikes";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarData | AircraftData | BikeData>
) {
  const { type, id } = req.query;

  if (type === "cars") {
    return res.status(200).json(cars[Number(id) - 1]);
  }
  if (type === "bikes") {
    return res.status(200).json(bikes[Number(id) - 1]);
  }
  if (type === "aircrafts") {
    return res.status(200).json(aircrafts[Number(id) - 1]);
  }
}
