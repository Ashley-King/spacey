import Link from 'next/link';
import styles from './LargeButton.module.css';
const LargeButton = (props) => {
  return (
    <Link href={props.link}>
      <a className={styles.largeButton}>{props.text}</a>
    </Link>
  );
}

export default LargeButton;