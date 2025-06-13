import React from 'react'
import Nevbar from './Nevbar'
import Footer from './Fotter'
import logo from '../assets/logo.png' // Adjust the path as necessary
import { Link } from 'react-router'

const Login = () => {
  return (
    <div>
      <Nevbar/>
       <div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center ">
                <p className="m-0">Login</p>
                <p className="m-0">Home-Product</p>
            </div>
      <div className=" flex items-center justify-center bg-gray-50 p-6 my-10">
  <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
    {/* <!-- Logo --> */}
    <div className="text-center mb-6">
      <img src={logo} alt="Logo" className="mx-auto w-12 h-12"/>
       <h1 className="!font-black !text-2xl mt-2" style={{ fontFamily: '"Fontdiner Swanky", cursive' }}>FoodTrove</h1>
    </div>

    {/* <!-- Login Form --> */}
    <form>
      {/* <!-- Email --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email Address*</label>
        <input type="email" placeholder="Enter Your Email" className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-400" />
      </div>

      {/* <!-- Password --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password*</label>
        <input type="password" placeholder="Enter Your password" className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-400" />
      </div>

      {/* <!-- Remember + Forgot --> */}
      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center space-x-2 text-sm text-gray-600">
          <input type="checkbox" className="accent-red-500"/>
          <span>Remember Me</span>
        </label>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-700 text-black  !no-underline">Forgot Password?</a>
      </div>

      {/* <!-- Buttons --> */}
      <div className="flex items-center justify-between">
     <Link to="/">   <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">Login</button></Link>
     <Link to="/Ragistion" className="text-sm text-gray-600 hover:text-gray-800  !no-underline text-black">Signup?</Link>
      </div>
    </form>
  </div>
</div>

      <Footer />
    </div>
  )
}

export default Login;
