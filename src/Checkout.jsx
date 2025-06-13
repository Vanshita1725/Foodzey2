import React from 'react'
import Nevbar from './Componenets/Nevbar'
import Footer from './Componenets/Fotter'
import product1 from "./assets/10.jpg.png";
import product4 from "./assets/12.jpg.png";
import Visa from "./assets/Visa-Logo-2006.png";
import MasterCard from "./assets/master-card-logo.png";
import paypal from "./assets/PayPal.png";
import Skrill from "./assets/skrill.jpg";
import maestro from "./assets/Maestro.png";
import visae from "./assets/visa-ele.jpeg";
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router';



const Checkout = () => {
    return (
        <div>
            <Nevbar />
            <div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center ">
                <p className="m-0">Checkout</p>
                <p className="m-0">Home-Product</p>
            </div>
            <div className='lg:flex justify-center mt-10'>
                <div className='flex flex-col ! gap-3'>

                    <div className="max-w-sm m-0 bg-white rounded-lg !shadow-md border p-3 ">

                        {/* <!-- Summary Header --> */}
                        <div>
                            <h2 className="!text-xl font-semibold mb-2">Summary</h2>
                            <div className="flex justify-between !text-sm text-gray-600">
                                <span>Sub-Total</span>
                                <span>$80.00</span>
                            </div>
                            <div className="flex justify-between !text-sm text-gray-600 mt-1">
                                <span>Delivery Charges</span>
                                <span>$80.00</span>
                            </div>
                            <hr className="mt-3 text-xs border-gray-200" />
                            <div className="flex justify-between !text-base font-semibold">
                                <span>Total Amount</span>
                                <span>$80.00</span>
                            </div>
                        </div>


                        {/* <!-- Product 1 --> */}
                        <div className="flex items-start gap-4">
                            <img src={product1} alt="Dates" className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1">
                                <h3 className="!text-sm font-medium text-gray-800">Dates Value Pack Pouch</h3>
                                <div className="flex text-yellow-500 text-sm mt-1">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="mt-1 text-sm">
                                    <span className="text-green-600 font-semibold">$120.25</span>
                                    <span className="text-gray-400 line-through ml-2">$123.25</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Product 2 --> */}
                        <div className="flex items-start gap-4">
                            <img src={product4} alt="Nuts" className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1">
                                <h3 className="!text-sm font-medium text-gray-800">Smoked Honey Spiced Nuts</h3>
                                <div className="flex text-yellow-500 text-sm mt-1">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="mt-1 text-sm">
                                    <span className="text-green-600 font-semibold">$120.25</span>
                                    <span className="text-gray-400 line-through ml-2">$123.25</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Delivery Method --> */}
                    <div className="max-w-sm mx-auto bg-white border rounded-md p-3 mb-6">
                        <h2 className="!text-lg font-semibold mb-2">Delivery Method</h2>
                        <p className="!text-sm text-gray-500 mb-4">
                            Please select the preferred shipping method to use on this order.
                        </p>

                        <div className="flex items-center justify-between mb-4">
                            {/* <!-- Free Shipping --> */}
                            <label className="flex items-center gap-2">
                                <input type="radio" name="delivery" className="accent-red-500" />
                                <span>
                                    <strong>Free Shipping</strong><br />
                                    <span className="text-sm text-gray-500">Rate - $0.00</span>
                                </span>
                            </label>

                            {/* <!-- Flat Rate --> */}
                            <label className="flex items-center gap-2">
                                <input type="radio" name="delivery" className="!hover:accent-red-500" />
                                <span>
                                    <strong>Flat Rate</strong><br />
                                    <span className="text-sm text-gray-500">Rate - $5.00</span>
                                </span>
                            </label>
                        </div>

                        {/* <!-- Comments --> */}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Add Comments About Your Order</label>
                        <textarea
                            className="w-full border rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-500"
                            rows="3"
                            placeholder="Write here..."
                        ></textarea>
                    </div>

                    {/* <!-- Payment Method --> */}
                    <div className="max-w-sm mx-auto bg-white border rounded-md px-5 py-4 mb-6">
                        <h2 className="!text-lg font-semibold mb-2">Payment Method</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Please select the preferred payment method to use on this order.
                        </p>

                        <div className="space-y-3">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" className="accent-red-500" />
                                <span>Cash On Delivery</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" className="accent-red-500" />
                                <span>UPI</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" className="accent-red-500" />
                                <span>Bank Transfer</span>
                            </label>
                        </div>
                    </div>

                    {/* <!-- Payment Logos --> */}
                    <div className="max-w-sm mx-auto bg-white border rounded-md py-3 px-5">
                        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                        <div className="flex flex-wrap gap-3 items-center">
                            <img src={Visa} alt="Visa" className="h-6" />
                            <img src={MasterCard} alt="MasterCard" className="h-6" />
                            <img src={paypal} alt="PayPal" className="h-6" />
                            <img src={Skrill} alt="Skrill" className="h-6 " />
                            <img src={maestro} alt="Maestro" className="h-6" />
                            <img src={visae} alt="Visa Electron" className="h-6" />
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col ! gap-3 ms-10'>           
                         <div className="max-w-3xl mx-4 h-135  p-6 bg-white border rounded-md shadow-sm">
                    {/* <!-- New Customer --> */}
                    <div className="mb-2">
                        <h2 className="!text-xl font-semibold mb-3">New Customer</h2>

                        <p className="font-medium mb-2">Checkout Options</p>

                        <div className="flex items-center gap-6 mb-4">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="accountType" className="accent-green-600" />
                                <span>Register Account</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="accountType" className="accent-green-600" />
                                <span>Guest Account</span>
                            </label>
                        </div>

                        <p className="text-sm text-gray-600 me-43 mb-4">
                            By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                        </p>

                        <button className="bg-red-500 text-white font-medium px-6 py-2 rounded hover:bg-red-600">
                            Continue
                        </button>
                    </div>

                    <hr className="mb-8" />

                    {/* <!-- Returning Customer --> */}
                    <div>
                        <h2 className="!text-xl font-semibold mb-6">Returning Customer</h2>

                        <div className="mb-2">
                            <label form="email" className="block text-sm font-medium mb-1">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label form="password" className="block text-sm font-medium mb-1">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-red-500 text-white px-6 py-2 rounded font-medium hover:bg-red-600">
                                Login
                            </button>
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:underline">Forgot Password?</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-4 p-6 bg-white border rounded-md shadow-sm">
                    <h2 className="!text-xl font-semibold mb-6">Billing Details</h2>

                    {/* <!-- Checkout Options --> */}
                    <div className="mb-6">
                        <p className="font-medium mb-2">Checkout Options</p>
                        <div className="flex flex-wrap gap-6">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="addressOption" className="accent-red-500" />
                                <span>I want to use an existing address</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="addressOption" className="accent-red-500" />
                                <span>I want to use new address</span>
                            </label>
                        </div>
                    </div>

                    {/* <!-- Name Fields --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block mb-1 text-sm font-medium">First Name<span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Enter your first name" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Last Name<span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Enter your last name" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500" />
                        </div>
                    </div>

                    {/* <!-- Address Field --> */}
                    <div className="mb-6">
                        <label className="block mb-1 text-sm font-medium">Address</label>
                        <input type="text" placeholder="Address Line 1" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500" />
                    </div>

                    {/* <!-- City and Post Code --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block mb-1 text-sm font-medium">City <span className="text-red-500">*</span></label>
                            <select className="w-full border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-red-500">
                                <option>City</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Post Code</label>
                            <input type="text" placeholder="Post Code" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500" />
                        </div>
                    </div>

                    {/* <!-- Country and Region State --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Country <span className="text-red-500">*</span></label>
                            <select className="w-full border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-red-500">
                                <option>Country</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Region State</label>
                            <select className="w-full border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-red-500">
                                <option>Region/State</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex relative justify-end me-3 mb-4'>
            <Link to="/"><button className="bg-red-500 w-30 !text-sm  text-white px-6 py-2 rounded font-normal hover:bg-red-600">
                                Place Order
                            </button></Link> 
                            </div>
                </div>


            </div>



            <Footer />

        </div>
    )
}

export default Checkout
