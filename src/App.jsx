import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
    </>
  )
}

export default App
