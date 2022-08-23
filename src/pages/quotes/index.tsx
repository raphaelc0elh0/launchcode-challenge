import Head from "next/head"
import Card from "../../components/Card"
import { useQuotes } from "../../hooks/useQuotes"

export default function Quotes() {
  const { quotes } = useQuotes()

  return (
    <>
      <Head>
        <title>Quotes | Wet Bat</title>
      </Head>
      <h1>Quotes</h1>
      <div className="row">
        <Card icon="icon" title="Quotes" side="X">
          <table>
            <thead>
              <tr>
                <th>ID #</th>
                <th>From</th>
                <th>Destination</th>
                <th>Departure Date</th>
                <th>Return Date</th>
                <th>People</th>
                <th>Transportation</th>
                <th>Destination</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map(({ id, from, to, departureDate, returnDate, people, transportation, price }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{from}</td>
                  <td>{to}</td>
                  <td>{departureDate}</td>
                  <td>{returnDate}</td>
                  <td>{people}</td>
                  <td>{transportation}</td>
                  <td>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  )
}
