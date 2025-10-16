
import styles from "./AddContactPage.Module.css"
import {Link, useNavigate } from "react-router-dom"
import inputs from "../constants/inputs.js"
import { v4 } from 'uuid'
import { ImAddressBook } from "react-icons/im";
import Modal from "../components/Modal";
import Alert from '../components/Alert'

function AddContactPage({contact, setContact, contacts, setContacts, modal, setModal, alert, setAlert}) {
  const navigate = useNavigate();
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({...contact, [name] : value}));
}

const addHandler = () => {
    if(!contact.name || !contact.job || !contact.email || !contact.phone){
      setModal(null);
      setAlert({
        type: "error",
        message: "تمام فیلدها باید پر شوند!",
      });
      return;
    }
   
    const newContact = {...contact , id: v4()};
    setContacts(contacts => ([...contacts, newContact]));
    setContact({
     name: "",
     email: "",
     job: "",
     phone: "",
    });
    navigate("/");
    setModal(null);
    setAlert({
      type: "success",
      message: "مخاطب با موفقیت افزوده شد!",
    });
}
const openAddModal = () => {
  setModal({
    title: "افزودن مخاطب جدید",
    message: "آیا از افزودن مخاطب جدید اطمینان دارید؟",
    confirmText: "افزودن",
    cancelText: "انصراف",
    onConfirm: addHandler,
  });
};



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
       <h3>افزودن مخاطب</h3>
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
       <button onClick={openAddModal}>افزودن</button>
     </div>
     {modal && (
       <Modal 
         title={modal.title}
         message={modal.message}
         confirmText={modal.confirmText}
         cancelText={modal.cancelText}
         onConfirm={modal.onConfirm}
         onCancel={() => setModal(null)}
       />
    )}
    
 </div>
</>
)
}

export default AddContactPage