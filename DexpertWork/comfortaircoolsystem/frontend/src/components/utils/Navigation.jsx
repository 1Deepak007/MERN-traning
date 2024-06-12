import React from 'react';
import { Link } from 'react-router-dom';
import { GiAutoRepair } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex top-0 sticky flex-col bg-black text-white font-sans sm:max-h-12">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <GiAutoRepair className="h-6 w-6"/>
          <span className='text-white mx-2 font-sans font-bold sm:text-wrap'>Comfort Aircool System</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4 hover:bg-slate-300 hover:text-black hover:bg-blue-gray-50 hover:p-1 hover:rounded-xl">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium hover:underline underline-offset-4 hover:bg-slate-300 hover:text-black hover:bg-blue-gray-50 hover:p-1 hover:rounded-xl">
            Services
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4 hover:bg-slate-300 hover:text-black hover:bg-blue-gray-50 hover:p-1 hover:rounded-xl">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4 hover:bg-slate-300 hover:text-black hover:bg-blue-gray-50 hover:p-1 hover:rounded-xl">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};



function ApertureIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m14.31 8 5.74 9.94" />
        <path d="M9.69 8h11.48" />
        <path d="m7.38 12 5.74-9.94" />
        <path d="M9.69 16 3.95 6.06" />
        <path d="M14.31 16H2.83" />
        <path d="m16.62 12-5.74 9.94" />
      </svg>
    );
  }
  

export default Navbar;
