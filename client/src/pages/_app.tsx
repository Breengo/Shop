import React from "react";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { persistor } from "@/redux/store";
import { Roboto } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

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
    appProps.router.pathname.includes("details") ||
    appProps.router.pathname.includes("cart")
  );
  const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={THEME}>
          <LayoutComponent>
            <div>
              <style jsx global>
                {`
                  :root {
                    --roboto-font: ${roboto.style.fontFamily};
                  }
                `}
              </style>
            </div>
            <Component {...pageProps} />
          </LayoutComponent>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
