import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-100">
  <div className="container px-5 py-12 mx-auto flex md:items-start lg:items-start md:flex-row flex-wrap flex-col">
    {/* Company Info */}
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-6 md:mb-0">
      <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Empowering developers with clean, responsive UI components.
      </p>
    </div>

    {/* Navigation Links */}
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Resources
        </h2>
        <nav className="list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Documentation</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Tutorials</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Community</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Company
        </h2>
        <nav className="list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">About Us</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Careers</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Legal
        </h2>
        <nav className="list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Terms of Service</a>
          </li>
        </nav>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="bg-gray-200">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2024 Tailblocks —
        <a
          href="https://twitter.com/knyttneve"
          className="text-gray-600 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @knyttneve
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500 hover:text-indigo-500">
          <svg
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500 hover:text-indigo-500">
          <svg
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500 hover:text-indigo-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500 hover:text-indigo-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
