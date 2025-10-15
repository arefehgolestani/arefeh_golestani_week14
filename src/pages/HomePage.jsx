import Contacts from "../components/Contacts.jsx"

function HomePage({contacts, deleteHandler}) {
  return (
    <>
      <Contacts contacts={contacts} deleteHandler={deleteHandler} />  
    </>
  )
}

export default HomePage