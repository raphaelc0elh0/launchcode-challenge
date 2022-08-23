import Link from "next/link"
import styles from "./styles.module.scss"

export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div>
          <button type="button">menu</button>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div>
          <input type="search" />
          <button type="button">not.</button>
          <button type="button">chat</button>
          <button type="button">set.</button>
          <button type="button">user</button>
        </div>
      </header>
    </>
  )
}
