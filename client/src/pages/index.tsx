import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-neutral-900 w-full h-screen text-white text-5xl flex items-center justify-center flex-col">
        <h1 className="uppercase mb-12">Shop</h1>
        <Link
          href="/cars"
          className="bg-neutral-500 p-4 rounded-md uppercase text-gray-300 hover:scale-105 hover:bg-red-500 hover:text-white transition"
        >
          Start shopping
        </Link>
      </main>
    </>
  );
}
