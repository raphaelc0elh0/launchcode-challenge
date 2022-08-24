import { useQuotes } from "../../../hooks/useQuotes"
import Card from "../../Card"
import { FaRegClock } from "react-icons/fa"

export default function PendingQuotesCard() {
  const { quotes } = useQuotes()
  const pendingQuotes = quotes

  return (
    <Card icon={<FaRegClock />} title="Pending Quotes">
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
