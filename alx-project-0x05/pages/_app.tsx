import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/layouts/Layout"
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps  ) {
  return (
    <CountProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      
        <Layout>
          <Component {...pageProps} />
        </Layout>
      
    </ThemeProvider>
    </CountProvider>
  )
}