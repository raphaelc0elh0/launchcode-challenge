import { useQuotes } from "../../../hooks/useQuotes"
import Card from "../../Card"
import { FaInfoCircle, FaRegClock } from "react-icons/fa"
import Link from "next/link"

export default function PendingQuotesCard() {
  const { quotes } = useQuotes()
  const pendingQuotes = quotes.filter((quote) => quote.status === "pending")

  return (
    <Card icon={<FaRegClock />} title="Pending Quotes">
      <table>
        <thead>
          <tr>
            <th>ID #</th>
            <th>Name</th>
            <th>Destination</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pendingQuotes.map(({ id, name, to, formattedPrice }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{to}</td>
              <td>{formattedPrice}</td>
              <td>
                  <Link href={`/quotes/${id}`}>
                    <a style={{ color: "var(--green-500)" }}>
                      <FaInfoCircle />
                    </a>
                  </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
