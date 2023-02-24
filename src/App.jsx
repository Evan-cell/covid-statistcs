import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <News />
    </div>
  )
}

export default App
