import Card from "../../Card"
import styles from "./styles.module.scss"

const pendingQuotes = [
  { id: "12345678", name: "Katty Abcdefgh", to: "Vancouver", price: "$ 1000.00" },
  { id: "12345678", name: "Katty Abcdefgh", to: "Vancouver", price: "$ 1000.00" },
  { id: "12345678", name: "Katty Abcdefgh", to: "Vancouver", price: "$ 1000.00" },
  { id: "12345678", name: "Katty Abcdefgh", to: "Vancouver", price: "$ 1000.00" },
  { id: "12345678", name: "Katty Abcdefgh", to: "Vancouver", price: "$ 1000.00" },
  { id: "12345678", name: "Katty Abcdefgh", to: "Vancouver", price: "$ 1000.00" },
  { id: "12345678", name: "Katty Abcdefgh", to: "Vancouver", price: "$ 1000.00" }
]

export default function PendingQuotesCard() {
  return (
    <Card icon="icon" title="Pending Quotes" side="X">
      <table>
        <thead>
          <tr>
            <th>ID #</th>
            <th>Name</th>
            <th>Destination</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {pendingQuotes.map(({ id, name, to, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{to}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
