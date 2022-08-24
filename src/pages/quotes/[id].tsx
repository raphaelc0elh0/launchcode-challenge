import Head from "next/head"
import { useRouter } from "next/router"
import Card from "../../components/Card"
import formatter from "../../helper/formatter"
import { useCustomers } from "../../hooks/useCustomers"
import { useQuotes } from "../../hooks/useQuotes"
import styles from "./quote.module.scss"

export default function Quote() {
  const router = useRouter()
  const { id } = router.query

  const { customers } = useCustomers()
  const { quotes } = useQuotes()
  const quote = quotes.find((quote) => quote.id === id)
  const customer = customers.find((customer) => customer.id === quote?.customerId)

  return (
    <>
      <Head>
        <title>Quote #{id} | Wet Bat</title>
      </Head>
      {!quote || !customer ? (
        "Error"
      ) : (
        <>
          <div className="row">
            <Card title={`Quote #${id}`}>
              <div className={styles.dataGroup}>
                {[
                  { label: "From", data: quote.from },
                  { label: "Destination", data: quote.to },
                  { label: "Departure Date", data: formatter.date(quote.departureDate) },
                  { label: "Return Date", data: formatter.date(quote.returnDate) },
                  { label: "People", data: quote.people },
                  { label: "Transportation", data: quote.transportation },
                  { label: "Price", data: quote.formattedPrice },
                  { label: "Status", data: quote.status }
                ].map(({ label, data }) => (
                  <div key={label} className={styles.dataSet}>
                    <small>{label}</small>
                    <div>{data}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <Card title="Customer">
            <div className={styles.dataGroup}>
              {[
                { label: "Name", data: `${customer.lastName}, ${customer.firstName}` },
                { label: "Phone", data: customer.phone },
                { label: "Email", data: customer.email }
              ].map(({ label, data }) => (
                <div key={label} className={styles.dataSet}>
                  <small>{label}</small>
                  <div>{data}</div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </>
  )
}
