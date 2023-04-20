import Image from "next/image";
import Link from "next/link";

type CarData = {
  title: string;
  fuel: string;
  transmission: string;
  engine: string;
  drivetrain: string;
  interiorColor: string;
  exteriorColor: string;
  id: number;
};

interface BoxProps {
  data: CarData;
}

const ProductBox: React.FC<BoxProps> = ({ data }) => {
  const PROPERTIES = [
    `Fuel:${data.fuel}`,
    `Transmission:${data.transmission}`,
    `Engine:2.4: ${data.engine}`,
    `Drivetrain:${data.drivetrain}`,
    `Interior color:${data.interiorColor}`,
    `Exterior color:${data.exteriorColor}`,
  ];
  return (
    <Link
      href={`/details/${data.id}`}
      className="w-full animate-in fade-in duration-1000"
    >
      <div className="border-t border-t-neutral-800 w-full py-10 px-8 hover:bg-neutral-800 hover:scale-105 cursor-pointer transition rounded-md">
        <div className="flex">
          <Image
            className="rounded-md w-96 h-60"
            src="/car.jpg"
            alt="error"
            height={200}
            width={400}
          />
          <div className="text-3xl ml-8 w-full font-mono relative">
            <div>
              <h3 className="text-white font-bold">{data.title}</h3>
              <ul className="text-xl text-neutral-100 mt-2 flex flex-wrap">
                {PROPERTIES.map((property, index) => (
                  <li
                    key={index}
                    className="p-2 border-neutral-700 border rounded-md m-2"
                  >
                    {property}
                  </li>
                ))}
              </ul>
            </div>
            <p className="absolute right-0 bottom-0 text-rose-400  rounded-xl p-2">
              3100$
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
