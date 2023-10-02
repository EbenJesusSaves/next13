import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

//types config for _app.tsx
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => page is ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout || ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)};</>;
}
