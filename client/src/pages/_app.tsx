import React from "react";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const isLayoutNeeded = !(
    "/" == appProps.router.pathname ||
    appProps.router.pathname.includes("details")
  );
  const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  );
}
