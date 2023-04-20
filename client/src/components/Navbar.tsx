import Link from "next/link";
import { useRouter } from "next/router";

const ANCHORS = [
  { index: 1, text: "Cars", path: "/cars/1" },
  { index: 2, text: "Bikes", path: "/bikes/1" },
  { index: 3, text: "Aircrafts", path: "/aircrafts/1" },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-center w-full">
      <ul className="flex justify-around w-6/12 border border-neutral-800 rounded-md">
        {ANCHORS.map((anchor) => (
          <Link
            className={
              "w-full text-center text-xl font-bold font-mono p-2 transition py-4 " +
              (router.pathname.includes(anchor.text.toLowerCase())
                ? "bg-rose-500 text-white rounded-md"
                : "text-neutral-300 hover:text-white hover:bg-neutral-800")
            }
            href={anchor.path}
            key={anchor.index}
          >
            {anchor.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
