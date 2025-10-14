import styles from "./Contacts.module.css"
import {Link } from "react-router-dom"



function Contacts() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div>
               <label>  جستجو در مخاطبین : </label>
               <input type="text" />
            </div>
            <div>
               <button>حذف گروهی</button>
               <button>
                 <Link to="/add-contact">اضافه کردن</Link>
               </button>
              
            </div>
        </div>
        <div className={styles.contacts}>
           <p>در حال حاضر هیچ موردی وجود ندارد!</p>
        </div>
    </div>
  )
}

export default Contacts