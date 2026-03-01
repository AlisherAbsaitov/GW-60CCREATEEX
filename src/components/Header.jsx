import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { FaRegMoon, } from "react-icons/fa";

export default function Header() {

    const [isDark, setIsDark] = useState(false);
  
    const darkMode = () => {
      document.documentElement.classList.toggle("dark");
      setIsDark(!isDark);
    };

  return (
    <header className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        <div>
          <img src={logo} alt="" />
        </div>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-black dark:text-white">
            <li><Link to="/">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contacts">Contacts.</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
            Get consultation
          </button>

          <Link to="/login" className="text-sm text-black dark:text-white">
            Log in / Register
          </Link>
        </div>

        <FaRegMoon onClick={darkMode} className='text-black dark:text-white cursor-pointer ml-4' size={20} />

      </div>
    </header>
  );
}