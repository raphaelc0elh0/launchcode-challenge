import { useEffect, useState } from "react"
import { useQuotes } from "../../../hooks/useQuotes"
import styles from "./styles.module.scss"

interface UpdateQuotationFormProps {
  id: string
  currentPrice: number | null
}

export default function UpdateQuotationForm({ id, currentPrice }: UpdateQuotationFormProps) {
  const { quotateQuote } = useQuotes()
  const [opened, setOpened] = useState(false)

  const [input, setInput] = useState({ price: "0" })

  useEffect(() => {
    setInput({ price: currentPrice?.toString() || "0" })
  }, [opened])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    setInput((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    await quotateQuote(id, Number(input.price))
    setInput({ price: "0" })
    setOpened(false)
  }

  return (
    <div className={styles.container}>
      {!opened ? (
        <button type="button" onClick={() => setOpened(true)}>
          Update quotation
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" value={input.price} onChange={handleChange} />
          </div>
          <button type="button" className="red" onClick={() => setOpened(false)}>
            Cancel
          </button>
          <button type="submit">Confirm</button>
        </form>
      )}
    </div>
  )
}
