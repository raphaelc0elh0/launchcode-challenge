import styles from "./styles.module.scss"

interface CardProps {
  icon?: React.ReactNode
  title: string
  side?: React.ReactNode
  children: React.ReactNode
}

export default function Card({ icon, title, side, children }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.cardSection} ${styles.cardHeader}`}>
        <div>
          {icon && <span className={styles.cardIcon}>{icon}</span>}
          <span>{title}</span>
        </div>
        {side && <div>{side}</div>}
      </div>
      <div className={styles.cardSection}>{children}</div>
    </div>
  )
}
