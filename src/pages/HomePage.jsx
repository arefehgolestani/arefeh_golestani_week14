
import {Link } from "react-router-dom"
import { ImPlus } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

import ContactItem from "../components/ContactItem.jsx"
import styles from "./HomePage.module.css"
import Alert from '../components/Alert'
import Search from "../components/Search.jsx";



function HomePage({contacts, setModal, alert, setAlert, editHandler, deleteHandler }) {
const [search, setSearch] = useState("");



const filteredContacts = search
  ? contacts.filter((contact) => {
   return (
      contact.name?.toLowerCase().includes(search) ||
      contact.email?.toLowerCase().includes(search)
    );
}) : contacts;


  return (
    <>
      <div className={styles.container}>
      {alert && (
      <Alert
       type={alert.type}
       message={alert.message}
       onClose={() => setAlert(null)}
     />
     )}
        
        <div className={styles.header}>
            <Search search={search} setSearch={setSearch} />
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
                {filteredContacts.map((contact) => (
                   <ContactItem key={contact.id} data={contact} setModal={setModal} deleteHandler={deleteHandler} editHandler={editHandler} />
                ))}
               </ul>
           ) : ( <p>در حال حاضر هیچ موردی وجود ندارد!</p>)}
        </div>
    </div>
    </>
  )
}

export default HomePage