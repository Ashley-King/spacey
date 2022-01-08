import util from '../../styles/utilities.module.css'
import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar({children}) {
  return(
    <header>
      <nav>
        <ul className={`${util.flex} ${styles.navList}`}>
          <li className={styles.navItem}>
            <Link href="/">
              <a><span>00</span> Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a><span>01</span> Destination</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a><span>02</span> Crew</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a><span>03</span> Technology</a>
            </Link>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}