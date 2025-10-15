import AddContact from "../components/AddContact.jsx"

function AddContactPage({contact, setContact, contacts, setContacts}) {
  return (
    <>
      <AddContact contacts={contacts} setContacts={setContacts} contact={contact} setContact={setContact} />
    </>
  )
}

export default AddContactPage