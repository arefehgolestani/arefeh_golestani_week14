
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AddContactPage from './pages/AddContactPage.jsx'
import {useState} from "react"


function App() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    job: "",
    phone: "",
});

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  }
  

  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage deleteHandler={deleteHandler} contacts={contacts} />} />
         <Route path="add-contact" element={<AddContactPage contacts={contacts} setContacts={setContacts} contact={contact} setContact={setContact} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
