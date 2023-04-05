import Image from "next/image";

const ProductBox = () => {
  const PROPERTIES = [
    "Fuel:Gasoline",
    "Transmission:Automatic CTV",
    "Engine:2.4: H4 16V GDI DOHC Turbo",
    "Drivetrain:All-wheel Drive",
    "Interior color:Black",
    "Exterior color:Black",
  ];
  return (
    <div className="border-t border-t-neutral-800 w-full py-10 px-8 hover:bg-neutral-800 hover:scale-105 hover:rounded-md cursor-pointer transition">
      <div className="flex">
        <Image
          className="rounded-md"
          src="/car.jpg"
          alt="error"
          height={200}
          width={400}
        />
        <div className="text-3xl ml-8 w-full font-mono relative">
          <div>
            <h3 className="text-white font-bold">Toyota</h3>
            <ul className="text-xl text-neutral-100 mt-2 flex flex-wrap">
              {PROPERTIES.map((property) => (
                <li className="p-2 border-neutral-700 border rounded-md m-2">
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
  );
};

export default ProductBox;
