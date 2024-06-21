import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import Profil from './profil'
import './App.css'
import { useEffect, useState } from 'react'
import Employees from './Employees';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path='/profil' element={<Profil email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
