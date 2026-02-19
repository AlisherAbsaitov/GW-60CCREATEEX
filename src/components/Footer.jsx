import React from 'react'
// Kamron
import logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-7">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

       <div>
      <a href="">
        <img src={logo} alt="" />
      </a>
      <p className="text-gray-400 text-sm mt-4">
        CreateX Online School is a leader in online studying. We have lots of courses and programs from the main market experts.
      </p>
    </div>


      <div>
        <h3 className="font-semibold mb-4">Site Map</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white">About Us</a></li>
          <li><a href="#" className="hover:text-white">Courses</a></li>
          <li><a href="#" className="hover:text-white">Events</a></li>
          <li><a href="#" className="hover:text-white">Blog</a></li>
          <li><a href="#" className="hover:text-white">Contacts</a></li>
        </ul>
      </div>


      <div>
        <h3 className="font-semibold mb-4">Courses</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white">Marketing</a></li>
          <li><a href="#" className="hover:text-white">Management</a></li>
          <li><a href="#" className="hover:text-white">HR & Recruiting</a></li>
          <li><a href="#" className="hover:text-white">Design</a></li>
          <li><a href="#" className="hover:text-white">Development</a></li>
        </ul>
      </div>


      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm space-y-1">
            <span>(405) 555-0128</span>
            <span>hello@createx.com</span>
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 text-white px-3 py-2 rounded-l text-sm w-full focus:outline-none"
            />
            <button className="bg-red-500 px-4 py-2 rounded-r text-sm">→</button>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm">© All rights reserved. Made with ❤️ by CreateX Studio</p>
    </div>
  </footer>
  )
}