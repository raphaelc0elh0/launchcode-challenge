import { AppProps } from "next/app"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { CustomersProvider } from "../hooks/useCustomers"
import { QuotesProvider } from "../hooks/useQuotes"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomersProvider>
        <QuotesProvider>
          <Header />
          <main>
            <Navbar />
            <div className="content">
              <Component {...pageProps} />
            </div>
          </main>
        </QuotesProvider>
      </CustomersProvider>
    </>
  )
}

export default MyApp
