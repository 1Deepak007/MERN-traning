import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css'

const Footer = () => {


  return (
    <footer className="footer flex flex-col gap-2 sm:flex-row py-2 w-full items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Appliance Repair. All rights reserved.</p>
      {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link to="/terms" className="text-xs hover:underline underline-offset-4">
          Terms of Service
        </Link>
        <Link to="/privacy" className="text-xs hover:underline underline-offset-4">
          Privacy Policy
        </Link>
      </nav> */}
    </footer>
  );
};

export default Footer;
