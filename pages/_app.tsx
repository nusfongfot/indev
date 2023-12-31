"use client";
import "aos/dist/aos.css";
import AOS from "aos";

import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "../components/layout";
import LanguageContextProvider from "@/context/LanguageContext";
import "../i18n";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <LanguageContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageContextProvider>
    </>
  );
}
