import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
