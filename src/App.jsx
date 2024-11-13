import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import './App.css'
import UserInput from './Components/UserInput/UserInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <UserInput/>
    </>
  )
}

export default App
