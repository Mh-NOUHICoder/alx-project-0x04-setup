import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/layouts/Layout"
import ReduxProvider from "@/providers/ReduxProvider";

export default function App({ Component, pageProps }: AppProps  ) {
  return (
    <ReduxProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      
        <Layout>
          <Component {...pageProps} />
        </Layout>
      
    </ThemeProvider>
    </ReduxProvider>
    
  )
}