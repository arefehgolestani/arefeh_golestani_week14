import styles from "./Contacts.module.css"
import {Link } from "react-router-dom"
import ContactItem from "./ContactItem.jsx"
import { ImPlus } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";



function Contacts({ contacts, deleteHandler}) {
  
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div>
               <label>  جستجو در مخاطبین : </label>
               <input type="text" />
            </div>
            <div>
               <button><FaTrashAlt color="#8dae95" fontSize="1rem" /></button>
               <button>
                 <Link to="/add-contact"><ImPlus color="#8dae95" fontSize="1rem" /></Link>
               </button>
              
            </div>
        </div>
        <div className={styles.contacts}>
           {contacts.length ? (
              <ul className={styles.contacts_list}>
                {contacts.map((contact) => (
                   <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler} />
                ))}
               </ul>
           ) : ( <p>در حال حاضر هیچ موردی وجود ندارد!</p>)}
        </div>
    </div>
  )
}

export default Contacts