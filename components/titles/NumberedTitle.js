import styles from './NumberedTitle.module.css'

export default function NumberedTitle({number, text}) {
  return(
    <h2 className={styles.numberedTitle}><span>{number}</span> {text}</h2>
  )
}