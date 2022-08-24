import { useQuotes } from "../../../hooks/useQuotes"
import Card from "../../Card"

export default function PendingQuotesCard() {
  const { quotes } = useQuotes()
  const pendingQuotes = quotes

  return (
    <Card icon="icon" title="Pending Quotes" side="X">
      <table>
        <thead>
          <tr>
            <th>ID #</th>
            <th>Destination</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {pendingQuotes.map(({ id, to, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{to}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
