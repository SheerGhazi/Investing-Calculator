import React from 'react'
import investment_logo from "../../assets/investment-calculator-logo.png"

const Header = () => {
  return (
    <div id='header ' className='flex flex-col justify-center items-center gap-4 py-5' >
      <img className=' size-24 ' src={investment_logo} alt="" />
      <h1 className=''>Investment Calculator</h1>
      <section>
        <nav className='flex justify-between'>4
          <h1>logo</h1>
          <ul className=' flex'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            
          </ul>
        </nav>
      </section>
    </div>
    
  )
}

export default Header
