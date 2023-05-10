// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type CarData = {
  title: string;
  fuel: string;
  transmission: string;
  engine: string;
  drivetrain: string;
  interiorColor: string;
  exteriorColor: string;
  image: string;
  price: number;
  timeStamp: Date;
};

const cars = [
  {
    id: 1,
    title: "Toyota",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 5000,
    milleage: 10,
    timeStamp: new Date(2017, 0, 3),
  },
  {
    id: 2,
    title: "Nissan",
    fuel: "Gasoline",
    transmission: "CVT",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 35000,
    milleage: 50,
    timeStamp: new Date(2017, 0, 3),
  },
  {
    id: 3,
    title: "Mazda",
    fuel: "Gasoline",
    transmission: "Manual",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 55000,
    milleage: 500,
    timeStamp: new Date(2017, 0, 3),
  },
  {
    id: 4,
    title: "Citroen",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 15000,
    milleage: 1000,
    timeStamp: new Date(2017, 0, 3),
  },
  {
    id: 5,
    title: "BMW",
    fuel: "Gasoline",
    transmission: "Manual",
    engine: "Naturally aspirated",
    drivetrain: "Rear-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 155000,
    milleage: 1230,
    timeStamp: new Date(2019, 5, 8),
  },
  {
    id: 6,
    title: "Toyota",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "Rear-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 255000,
    milleage: 31240,
    timeStamp: new Date(2019, 5, 8),
  },
  {
    id: 7,
    title: "Nissan",
    fuel: "Gasoline",
    transmission: "CVT",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Red",
    image: "car.jpg",
    price: 355000,
    milleage: 21340,
    timeStamp: new Date(2019, 5, 8),
  },
  {
    id: 8,
    title: "Mazda",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Red",
    image: "car.jpg",
    price: 10000,
    milleage: 1230,
    timeStamp: new Date(2019, 5, 8),
  },
  {
    id: 9,
    title: "Citroen",
    fuel: "Gasoline",
    transmission: "CVT",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Blue",
    image: "car.jpg",
    price: 20000,
    milleage: 0,
    timeStamp: new Date(2019, 5, 8),
  },
  {
    id: 10,
    title: "BMW",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Green",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 34000,
    milleage: 0,
    timeStamp: new Date(2010, 3, 5),
  },
  {
    id: 11,
    title: "Toyota",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 56000,
    milleage: 0,
    timeStamp: new Date(2010, 3, 5),
  },
  {
    id: 12,
    title: "Nissan",
    fuel: "Electricity",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 5000,
    milleage: 0,
    timeStamp: new Date(2017, 0, 3),
  },
  {
    id: 13,
    title: "Mazda",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Turbocharged",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 5000,
    milleage: 0,
    timeStamp: new Date(2010, 3, 5),
  },
  {
    id: 14,
    title: "Citroen",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "CRDi",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 500000,
    milleage: 0,
    timeStamp: new Date(2010, 3, 5),
  },
  {
    id: 15,
    title: "BMW",
    fuel: "Kerosene",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 8000,
    milleage: 0,
    timeStamp: new Date(2010, 3, 5),
  },
  {
    id: 16,
    title: "Toyota",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "MPFI",
    drivetrain: "Front-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 5000,
    milleage: 0,
    timeStamp: new Date(2013, 8, 3),
  },
  {
    id: 17,
    title: "Nissan",
    fuel: "Gasoline",
    transmission: "CVT",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 5000,
    milleage: 0,
    timeStamp: new Date(2013, 8, 3),
  },
  {
    id: 18,
    title: "Mazda",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Trubocharged",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 5000,
    milleage: 0,
    timeStamp: new Date(2013, 8, 3),
  },
  {
    id: 19,
    title: "Citroen",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 5000,
    milleage: 0,
    timeStamp: new Date(2013, 8, 3),
  },
  {
    id: 20,
    title: "BMW",
    fuel: "Gasoline",
    transmission: "Automatic",
    engine: "Naturally aspirated",
    drivetrain: "All-wheel Drive",
    interiorColor: "Black",
    exteriorColor: "Black",
    image: "car.jpg",
    price: 5000,
    milleage: 0,
    timeStamp: new Date(2013, 8, 3),
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarData[]>
) {
  const filter = req.query;

  if (filter) {
    res.status(200).json(
      cars.filter((item) => {
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
    res.status(200).json(cars);
  }
}
