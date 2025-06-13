import React from 'react'
import Nevbar from './Nevbar'
import Footer from './Fotter'
import logo from '../assets/logo.png' // Adjust the path as necessary
import { Link } from 'react-router'

const Ragistion = () => {
  return (
    <div>
      <Nevbar />
       <div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center ">
                <p className="m-0">Ragistion</p>
                <p className="m-0">Home-Product</p>
            </div>
            
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
  <div className="bg-white rounded-lg shadow-md w-full max-w-3xl p-6 md:p-10">
    {/* <!-- Logo and Title --> */}
    <div className="flex mx-auto items-center justify-center text-center mb-6">
      <img src={logo} alt="Logo" className=" w-12 h-12"/>
      <h1 className="!font-black !text-2xl mt-2" style={{ fontFamily: '"Fontdiner Swanky", cursive' }}>FoodTrove</h1>
    </div>

    {/* <!-- Form Start --> */}
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">First Name*</label>
          <input type="text" placeholder="Enter Your First Name" className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"/>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Last Name*</label>
          <input type="text" placeholder="Enter Your Last Name" className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"/>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Email*</label>
          <input type="email" placeholder="Enter Your email" className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"/>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Phone Number*</label>
          <input type="tel" placeholder="Enter Your phone number" className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"/>
        </div>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Address*</label>
        <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">City*</label>
          <input type="text" placeholder="City" className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 outline-none"/>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Post Code</label>
          <input type="text" placeholder="Post Code" className="w-full border border-gray-300 rounded px-4 py-2 outline-none"/>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Country*</label>
          <input type="text" placeholder="Country" className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 outline-none"/>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Region State*</label>
          <input type="text" placeholder="Region/State" className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 outline-none"/>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
       <Link to="/"> <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Signup</button></Link>
        <Link to="/Login" className="text-sm text-gray-600 hover:text-gray-800  text-black !no-underline">Have an account?</Link>
      </div>
    </form>
  </div>
</div>


      <Footer/>
    </div>
  )
}

export default Ragistion
