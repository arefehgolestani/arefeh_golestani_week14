
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AddContactPage from './pages/AddContactPage.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="add-contact" element={<AddContactPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
