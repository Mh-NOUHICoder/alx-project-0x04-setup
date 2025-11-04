// components/layout/Layout.tsx 
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
        <main className="pt-16"> {/* Add padding top to account for fixed header */}
          {children}
        </main>
      <Footer />
    </>
  )
}