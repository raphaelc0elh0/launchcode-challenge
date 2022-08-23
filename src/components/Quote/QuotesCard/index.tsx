import { useQuotes } from "../../../hooks/useQuotes"
import formatter from "../../../helper/formatter"
import Card from "../../Card"

export default function QuotesCard() {
  const { quotes } = useQuotes()

  return (
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
              <td>{formatter.date(departureDate)}</td>
              <td>{formatter.date(returnDate)}</td>
              <td>{people}</td>
              <td>{transportation}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
