import styles from './Header.module.css'
export default function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://github.com/Pedram-sfr">Pedram Safari</a> | React.js - Project
        </p>
    </div>
  )
}
