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

  
    const [userInput, setUserInput] = useState({
      initialInvestment: 5000,
      annualReturn: 1200,
      expectedReturn: 6,
      duration: 10,
    });
  
    function handleChange(inputIdentifier, newValue) {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: newValue,
        };
      });
    }

  return (
    <>
   <Header/>
   <UserInput UserInput={userInput} onChange={handleChange}/>
   <Result  input={userInput}/>
   {/* <Main/> */}
   {/* <Footer/> */}
   
    </>
  )
}

export default App
