import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import AddContactPage from './pages/AddContactPage.jsx'
import Modal from './components/Modal.jsx'
import Alert from './components/Alert.jsx'

function App() {
  const [alert, setAlert] = useState(null);
  const [modal, setModal] = useState(null);
  const [contacts, setContacts] = useState([]);
  // const [editContact, setEditContact] = useState(null);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    job: "",
    phone: "",
});
const navigate = useNavigate();

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    setModal(null);
    setAlert({
      type: "warning",
      message: "مخاطب حذف شد!",
    });
  };
  const editHandler = (id) => {
    navigate("/add-contact");
    const editedContact = contacts.find((contact) => contact.id === id);
    console.log(editedContact);
   
    setEditContact(editedContact);
    console.log(editContact)
  }
  
  return (
    <>
  
    <Routes>
         <Route path="/" element={<HomePage  setAlert={setAlert} alert={alert} deleteHandler={deleteHandler} contacts={contacts} setModal={setModal} />} />
         <Route path="add-contact" element={<AddContactPage  setAlert={setAlert} alert={alert}  modal={modal} setModal={setModal} contacts={contacts} setContacts={setContacts} contact={contact} setContact={setContact} />} />
    </Routes>

     
  
    {alert && (
      <Alert
       type={alert.type}
       message={alert.message}
       duration={alert.duration || 3000}
       onClose={() => setAlert(null)}
     />
    )}
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
    </>
  )
}

export default App
