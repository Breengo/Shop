import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-neutral-900 flex justify-center relative">
      <button
        onClick={() => router.back()}
        className="absolute top-0 left-0 text-rose-500 font-bold text-xl border-2 border-rose-500 rounded-md py-1 px-2 mt-8 ml-8 shadow-rose-500 shadow-inner"
      >
        Back
      </button>
      <div className="w-10/12 mt-40">
        <Image
          className="rounded-md"
          src="/car.jpg"
          alt="error"
          height={500}
          width={800}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
