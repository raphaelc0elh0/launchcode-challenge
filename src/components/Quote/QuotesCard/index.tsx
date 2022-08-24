import { useQuotes } from "../../../hooks/useQuotes"
import formatter from "../../../helper/formatter"
import Card from "../../Card"
import { BsCurrencyDollar } from "react-icons/bs"
import { FaInfoCircle } from "react-icons/fa"
import Link from "next/link"

export default function QuotesCard() {
  const { quotes } = useQuotes()

  return (
    <Card icon={<BsCurrencyDollar />} title="Quotes">
      <table>
        <thead>
          <tr>
            <th>ID #</th>
            <th>Name</th>
            <th>From</th>
            <th>Destination</th>
            <th>Departure Date</th>
            <th>Return Date</th>
            <th>People</th>
            <th>Transportation</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(
            ({ id, name, from, to, departureDate, returnDate, people, transportation, formattedPrice, status }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{from}</td>
                <td>{to}</td>
                <td>{formatter.date(departureDate)}</td>
                <td>{formatter.date(returnDate)}</td>
                <td>{people}</td>
                <td>{transportation}</td>
                <td>{formattedPrice}</td>
                <td>{status}</td>
                <td>
                  <Link href={`/quotes/${id}`}>
                    <a style={{ color: "var(--green-500)" }}>
                      <FaInfoCircle />
                    </a>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  )
}
