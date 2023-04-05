import React from "react";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  console.log(appProps.router.pathname);
  const isLayoutNeeded = !("/" == appProps.router.pathname);
  const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
