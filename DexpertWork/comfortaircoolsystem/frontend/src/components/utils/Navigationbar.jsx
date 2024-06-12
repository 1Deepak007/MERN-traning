// This one is extra



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const userImage = document.getElementById('userImage');
        const dropdownMenu = document.getElementById('dropdownMenu');

        const handleUserImageClick = () => {
            dropdownMenu.classList.toggle('hidden');
        };

        const handleWindowClick = (event) => {
            if (!userImage.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
            }
        };

        userImage.addEventListener('click', handleUserImageClick);
        window.addEventListener('click', handleWindowClick);

        return () => {
            userImage.removeEventListener('click', handleUserImageClick);
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    return (
        <>
            <nav className="top-0 left-0 right-0 bg-gray-800">
                <div className="container mx-auto px-4 flex justify-between items-center py-3">
                    <div className="text-white font-bold text-xl">My Website</div>
                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                    <ul className={`lg:flex lg:items-center lg:space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
                        <li className="p-1 hover:font-extrabold font-sans text-violet-900 bg-lime-400 rounded-3xl hover:bg-gray-100 mr-1 mt-3.5 mb-5 lg:mt-0 lg:mb-0">
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="p-1 hover:font-extrabold font-sans text-violet-900 bg-lime-400 rounded-3xl hover:bg-gray-100 mr-1 mt-3.5 mb-5 lg:mt-0 lg:mb-0">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="p-1 hover:font-extrabold font-sans text-violet-900 bg-lime-400 rounded-3xl hover:bg-gray-100 mr-1 mt-3.5 mb-5 lg:mt-0 lg:mb-0">
                            <Link to='/services'>Services</Link>
                        </li>
                        <li className="p-1 hover:font-extrabold font-sans text-violet-900 bg-lime-400 rounded-3xl hover:bg-gray-100 mr-1 mt-3.5 mb-5 lg:mt-0 lg:mb-0">
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <div className="relative ml-auto me-2 mt-1 mb-1 lg:ml-0 lg:me-0 lg:mt-0 lg:mb-0">
                            <img
                                src="https://randomuser.me/api/portraits/women/72.jpg"
                                className="h-12 pt-1 rounded-full cursor-pointer"
                                alt="user image" id="userImage"
                            />
                            <div id="dropdownMenu" className="hidden absolute right-0 bg-slate-300 rounded-lg shadow-lg mt-2 w-48">
                                <Link to="#profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Profile
                                </Link>
                                <Link to="#settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Settings
                                </Link>
                                <Link to="#logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}
