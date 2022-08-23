import { AppProps } from "next/app"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Navbar />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}

export default MyApp
