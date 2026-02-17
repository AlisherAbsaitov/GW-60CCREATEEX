import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineEye } from 'react-icons/ai';
// Mushtariy
export default function SigIn() {
  return (
    <div className="min-h-screen bg-gray-100 pl-170 pt-50 items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <AiOutlineClose size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign in</h2>
          <p className="text-gray-500 text-sm">
            Sign in to your account using email and password provided during registration.
          </p>
        </div>


        <form>
          <div className='m-3'>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Your working email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          <div className="relative m-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Your working password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
            <AiOutlineEye className="absolute right-3 top-9 text-gray-400 cursor-pointer" size={20} />
          </div>


          <div className="items-center text-sm text-center m-4">
            <a href="#" className="text-orange-600 hover:underline">Forgot password?</a>
          </div>

 
          <button className="w-full bg-[#E55B3C] hover:bg-[#d44a2b] text-white font-bold py-3 rounded-md shadow-md transition duration-300">
            Sign in
          </button>


          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <a href="#" className="text-orange-600 font-semibold hover:underline">Sign up</a>
          </p>
        </form>

        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm mb-4">Or sign in with</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition"><FaGoogle size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

      </div>
    </div>
  )
}
