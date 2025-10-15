import styles from "./ContactItem.module.css"

function ContactItem({ deleteHandler, data : {id, name, email, phone}}) {
  return (
    <li className={styles.contacts_item} key={id}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>
            <button>ویرایش</button>
            <button onClick={() => deleteHandler(id)}>حذف</button>
        </p>
    </li>
  )
}

export default ContactItem