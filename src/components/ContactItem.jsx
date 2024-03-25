import styles from "./ContactItem.module.css"
export default function ContactItem({data,deleteHandler}) {
  return ((
        <li className={styles.item}>
            <p><span>🙍‍♂️</span> {data.name} {data.lastName}</p>
            <p><span>📧</span> {data.email}</p>
            <p><span>📞</span> {data.phone}</p>
            <button onClick={() => deleteHandler(data.id)}>🗑</button>
        </li>
    )
  )
}
