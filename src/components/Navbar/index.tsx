import Link from "next/link"
import { navLinks, officeLinks } from "./links"
import styles from "./styles.module.scss"

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      {navLinks.map(({ icon, label, link }) => (
        <Link key={label} href={link}>
          <a>
            {icon} {label}
          </a>
        </Link>
      ))}
      <div>---</div>
      {officeLinks.map(({ icon, label, link }) => (
        <Link key={label} href={link}>
          <a>
            {icon} {label}
          </a>
        </Link>
      ))}
    </nav>
  )
}
