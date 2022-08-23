import Head from "next/head"
import QuotesCard from "../../components/Quote/QuotesCard"

export default function Quotes() {
  return (
    <>
      <Head>
        <title>Quotes | Wet Bat</title>
      </Head>
      <h1>Quotes</h1>
      <div className="row">
        <QuotesCard />
      </div>
    </>
  )
}
