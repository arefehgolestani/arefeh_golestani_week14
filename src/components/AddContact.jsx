import {Link } from "react-router-dom"
import styles from "./AddContact.module.css"
import inputs from "../constants/inputs.js"
import { useState } from "react"
import { v4 } from 'uuid'
import { ImAddressBook } from "react-icons/im";

function AddContact({contact, setContact, contacts, setContacts}) {
    
    
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({...contact, [name] : value}));
    }

    const addHandler = () => {
        const newContact = {...contact , id: v4()};
        setContacts(contacts => ([...contacts, newContact]));
        setContact({
         name: "",
         email: "",
         job: "",
         phone: "",
        });
    }
    
  return (
    <>
     <div className={styles.container}>
         <div className={styles.header}>
           <h3>اضافه کردن مخاطب</h3>
           <button>
             <Link to="/"><ImAddressBook color="#8dae95" fontSize="1.1rem" /></Link>
           </button>
         </div>
         <div className={styles.inputs_container}>
           {
               inputs.map((input, index) => (
                   <div className={styles.inputs} key={index}>
                      <label>{input.placeholder}</label>
                      <input
                        type={input.type} 
                        name={input.name} 
                        onChange={changeHandler} 
                        value={contact[input.name]} 
                       />
                   </div>
               ))
           }
           <button onClick={addHandler}>افزودن</button>
         </div>
        
     </div>
    </>
  )
}

export default AddContact