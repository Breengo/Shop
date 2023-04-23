import React from "react";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Roboto } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

const THEME = createTheme({
  typography: {
    fontFamily: "var(--roboto-font)",
  },
});

export default function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const isLayoutNeeded = !(
    "/" == appProps.router.pathname ||
    appProps.router.pathname.includes("details")
  );
  const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;
  return (
    <Provider store={store}>
      <style jsx global>
        {`
          :root {
            --roboto-font: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider theme={THEME}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ThemeProvider>
    </Provider>
  );
}
