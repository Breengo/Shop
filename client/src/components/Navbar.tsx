import Link from "next/link";
import { useRouter } from "next/router";

const ANCHORS = [
  { index: 1, text: "Cars", path: "/cars" },
  { index: 2, text: "Bikes", path: "/bikes" },
  { index: 3, text: "Aircrafts", path: "/aircrafts" },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-center w-full">
      <ul className="flex justify-around w-6/12 border-t border-r border-l border-neutral-800 rounded-t-md">
        {ANCHORS.map((anchor) => (
          <Link
            className={
              "w-full text-center text-xl font-bold hover:text-white hover:bg-neutral-800 font-mono p-2 transition py-4 " +
              (router.pathname === anchor.path
                ? "bg-rose-500 text-white rounded-md"
                : "text-neutral-300")
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
