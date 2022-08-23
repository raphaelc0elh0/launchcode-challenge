import Head from "next/head"
import AddQuickQuoteCard from "../components/Quote/AddQuickQuoteCard"
import PendingQuotesCard from "../components/Quote/PendingQuotesCard"
import QuotesCard from "../components/Quote/QuotesCard"

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Wet Bat</title>
      </Head>
      <h1>Dashboard</h1>
      <div className="row">
        <AddQuickQuoteCard />
        <PendingQuotesCard />
      </div>
      <div className="row">
        <QuotesCard />
      </div>
    </>
  )
}
