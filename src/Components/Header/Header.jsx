// import React from 'react'
// import investment_logo from "../../assets/investment-calculator-logo.png"

// const Header = () => {
//   return (
//     <div id='header ' className='flex flex-col justify-center items-center gap-4 py-5' >
//       <img className='size-24' src={investment_logo} alt="" />
//       <h1 className=''>Investment Calculator</h1>
      
//     </div>
    
//   )
// }

// export default Header


import React from "react";

const Header = () => {
  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         
          <span className="ml-3 text-white text-xl">Investment Calculator</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 hover:text-gray-900">
            First Link
          </a>
          <a href="#" className="mr-5 hover:text-gray-900">
            Second Link
          </a>
          <a href="#" className="mr-5 hover:text-gray-900">
            Third Link
          </a>
          <a href="#" className="mr-5 hover:text-gray-900">
            Fourth Link
          </a>
        </nav>
        <button className="inline-flex items-center text-gray-800 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

