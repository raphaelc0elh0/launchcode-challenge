import { FormEventHandler, useState } from "react"
import { useQuotes } from "../../../hooks/useQuotes"
import Card from "../../Card"
import styles from "./styles.module.scss"

export default function AddQuickQuoteCard() {
  const { createQuote } = useQuotes()

  const [input, setInput] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    people: 0,
    transportation: "",
    customerId: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setInput((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    createQuote({ ...input, people: Number(input.people) })
  }

  return (
    <Card icon="icon" title="Quick quote" side="X">
      <form onSubmit={handleSubmit} className={styles.addQuickNoteForm}>
        <div>
          <label htmlFor="from">From</label>
          <input type="text" name="from" id="from" value={input.from} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="to">Destination</label>
          <input type="text" name="to" id="to" value={input.to} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="departureDate">Depart Date</label>
          <input
            type="date"
            name="departureDate"
            id="departureDate"
            value={input.departureDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="returnDate">Return Date</label>
          <input type="date" name="returnDate" id="returnDate" value={input.returnDate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="people">People</label>
          <input type="number" name="people" id="people" value={input.people} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="transportation">Transportation</label>
          <input
            type="text"
            name="transportation"
            id="transportation"
            value={input.transportation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="customerId">Name</label>
          <input type="text" name="customerId" id="customerId" value={input.customerId} onChange={handleChange} />
        </div>
        <button type="submit">Create a quote</button>
      </form>
    </Card>
  )
}
