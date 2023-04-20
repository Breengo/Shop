import { useRouter } from "next/router";
import React from "react";

export default function Custom404() {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/cars/1");
    }, 2000);
  }, []);
  return (
    <div className="absolute w-full h-screen bg-neutral-800 top-0 left-0 z-50 flex items-center justify-center">
      <h1 className="text-5xl text-mono text-white uppercase">
        Page not found
      </h1>
    </div>
  );
}
