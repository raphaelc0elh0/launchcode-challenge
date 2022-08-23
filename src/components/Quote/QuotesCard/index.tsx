import Card from "../../Card"
import styles from "./styles.module.scss"

const quotes: any[] = []

export default function QuotesCard() {
  return (
    <Card icon="icon" title="Quotes" side="X">
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
            <th>Destination</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(({ id, name, from, to, departureDate, returnDate, people, transportation, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
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
  )
}
