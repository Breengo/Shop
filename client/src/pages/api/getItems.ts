// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

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

const cars = [
  {
    title: "Toyota",
    fuel: "Gasoline",
    transmission: "Automatic CTV",
    engine: "2.4: H4 16V GDI DOHC Turbo",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    price: "5000$",
  },
  {
    title: "Nissan",
    fuel: "Gasoline",
    transmission: "Automatic CTV",
    engine: "2.4: H4 16V GDI DOHC Turbo",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    price: "5000$",
  },
  {
    title: "Mazda",
    fuel: "Gasoline",
    transmission: "Automatic CTV",
    engine: "2.4: H4 16V GDI DOHC Turbo",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    price: "5000$",
  },
  {
    title: "Citroen",
    fuel: "Gasoline",
    transmission: "Automatic CTV",
    engine: "2.4: H4 16V GDI DOHC Turbo",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    price: "5000$",
  },
  {
    title: "BMW",
    fuel: "Gasoline",
    transmission: "Automatic CTV",
    engine: "2.4: H4 16V GDI DOHC Turbo",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    price: "5000$",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(cars);
}
