import Card from "../../Card"
import styles from "./styles.module.scss"

export default function AddQuickQuoteCard() {
  return (
    <Card icon="icon" title="Quick quote" side="X">
      <form action="" className={styles.addQuickNoteForm}>
        <div>
          <label htmlFor="from">From</label>
          <input type="text" name="from" id="from" />
        </div>
        <div>
          <label htmlFor="to">Destination</label>
          <input type="text" name="to" id="to" />
        </div>
        <div>
          <label htmlFor="departureDate">Depart Date</label>
          <input type="date" name="departureDate" id="departureDate" />
        </div>
        <div>
          <label htmlFor="returnDate">Return Date</label>
          <input type="date" name="returnDate" id="returnDate" />
        </div>
        <div>
          <label htmlFor="people">People</label>
          <input type="number" name="people" id="people" />
        </div>
        <div>
          <label htmlFor="transportation">Transportation</label>
          <input type="text" name="transportation" id="transportation" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <button type="submit">Create a quote</button>
      </form>
    </Card>
  )
}
