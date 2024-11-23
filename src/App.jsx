import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import './App.css'
import UserInput from './Components/UserInput/UserInput'
import Result from './Components/Result/Result'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   {/* <UserInput/> */}
   {/* <Result/> */}
   <Main/>
   <Footer/>
    </>
  )
}

export default App
