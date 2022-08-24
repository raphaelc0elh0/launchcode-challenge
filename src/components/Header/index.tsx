import Link from "next/link"
import styles from "./styles.module.scss"
import { BsFillChatLeftFill, BsBellFill, BsFillGearFill, BsColumns } from "react-icons/bs"

export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div>
          <button type="button">
            <BsColumns />
          </button>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div>
          <input type="search" placeholder="Search..." />
          <button type="button">
            <BsBellFill />
          </button>
          <button type="button">
            <BsFillChatLeftFill />
          </button>
          <button type="button">
            <BsFillGearFill />
          </button>
          <button type="button">
            <img src="/images/user.jpeg" alt="user avatar" width={30} />
          </button>
        </div>
      </header>
    </>
  )
}
