import util from '../../styles/utilities.module.css'
import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar({children}) {
  return(
    <div>
      <nav>
        <ul className={styles.navBar}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
        
      </nav>
    </div>
  )
}