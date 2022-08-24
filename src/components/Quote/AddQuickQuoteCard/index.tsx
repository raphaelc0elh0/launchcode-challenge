import { FormEventHandler, useEffect, useState } from "react"
import { useQuotes } from "../../../hooks/useQuotes"
import Card from "../../Card"
import styles from "./styles.module.scss"
import { FaAngleDoubleRight } from "react-icons/fa"
import { useCustomers } from "../../../hooks/useCustomers"
import { api } from "../../../services/api"

export default function AddQuickQuoteCard() {
  const { customers } = useCustomers()
  const { createQuote } = useQuotes()

  // const [keyword, setKeyword] = useState({ keyword: "", type: "" })
  // const [airportsSuggestions, setAirportsSuggestions] = useState([])

  const initInput = {
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    people: 0,
    transportation: "",
    customerId: ""
  }
  const [input, setInput] = useState(initInput)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value

    // handleKeyword(name, value)
    setInput((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createQuote({ ...input, people: Number(input.people) })
    setInput(initInput)
  }

  // // handle keyword
  // const handleKeyword = (name: string, value: string) => {
  //   setKeyword({ keyword: "", type: "" })
  //   if (name === "from") setKeyword({ keyword: value, type: "from" })
  //   if (name === "to") setKeyword({ keyword: value, type: "to" })
  // }

  // useEffect(() => {
  //   const getAirportsSuggestions = async () => {
  //     const response = await api.get(
  //       `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${keyword}&page[limit]=5`
  //     )
  //     setAirportsSuggestions(response.data)
  //   }
  //   if (keyword.keyword !== "" && keyword.type !== "") {
  //     getAirportsSuggestions()
  //   }
  // }, [keyword])

  // console.log(airportsSuggestions)

  return (
    <Card icon={<FaAngleDoubleRight />} title="Quick quote">
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
          <select name="transportation" id="transportation" value={input.transportation} onChange={handleChange}>
            <option></option>
            <option value="Rental Car">Rental Car</option>
            <option value="Shuttle">Shuttle</option>
            <option value="Train">Train</option>
            <option value="Taxi">Taxi</option>
          </select>
        </div>
        <div>
          <label htmlFor="customerId">Customer</label>
          <select name="customerId" id="customerId" value={input.customerId} onChange={handleChange}>
            <option></option>
            {customers.map(({ id, firstName, lastName }) => (
              <option key={id} value={id}>
                {lastName}, {firstName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create a quote</button>
      </form>
    </Card>
  )
}
