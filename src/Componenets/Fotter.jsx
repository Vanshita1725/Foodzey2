import { Link } from "react-router";
import display181 from "../assets/181.png";
import display182 from "../assets/182.png";
import display183 from "../assets/183.png";
import display184 from "../assets/184.png";
import display185 from "../assets/185.png";
import logo from "../assets/logo.png"


function Footer() {
    return (

<footer className="bg-[#f9f9f9] pt-10 pb-4">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {/* <!-- Brand & Contact Info --> */}
                    <div>
                        <div className="flex items-center space-x-3 mb-3">
                            <img src={logo} alt="logo" className="w-15 h-15 rounded-full" />
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Foodzy</h2>
                                <p className="text-sm text-gray-500">A Treasure of Tastes</p>
                            </div>
                        </div>
                        <p className="mb-4 text-sm !text-gray-500">FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                        <ul className="text-sm space-y-2 p-0">
                            <li className="flex items-center gap-2 !text-gray-500">
                                <i className="fas fa-map-marker-alt text-red-500"></i>
                                51 Green St. Huntington, Ohio Beach, Ontario, NY 11746 KY 4783, USA.
                            </li>
                            <li className="flex items-center !text-gray-500 gap-2">
                                <i className="fas fa-envelope text-red-500"></i>
                                example@email.com
                            </li>
                            <li className="flex items-center gap-2 !text-gray-500">
                                <i className="fas fa-phone text-red-500"></i>
                                +91 123 4567890
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Company Links --> */}
                    <div>
                        <h3 className="text-lg font-semibold ps-4 mb-3">Company</h3>
                        <ul className="space-y-2 flex flex-col gap-2 text-sm " >
                        <li> <Link to="/Aboutus" className="hover:text-red-500 !text-gray-500" style={{ textDecoration: 'none' }}>About Us</Link>    
  </li>                        <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Delivery Information</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Contact Us</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Support Center</a></li>
                        </ul>
                    </div>

                    {/* <!-- Category Links --> */}
                    <div>
                        <h3 className="text-lg  ps-4 font-semibold mb-3">Category</h3>
                        <ul className="space-y-2 gap-2 flex flex-col text-sm">
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Dairy & Bakery</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Fruits & Vegetable</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Snack & Spice</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Juice & Drinks</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Chicken & Meat</a></li>
                            <li><a href="#" className="hover:text-red-500 !text-gray-500"style={{ textDecoration: 'none' }}>Fast Food</a></li>
                        </ul>
                    </div>

                    {/* <!-- Newsletter & Social --> */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Subscribe Our Newsletter</h3>
                        <div className="flex mb-3 border rounded-md">
                            <input type="text" placeholder="Search here..." className="flex-1 px-2 py-2  outline-none" />
                            <button className=" text-black border-l-0  px-4 rounded-r-md">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>

                        <div className="flex space-x-3 mb-4">
                            <a href="#" className="w-9 h-9 bg-white !no-underline shadow border  rounded flex items-center justify-center hover:bg-gray-100" style={{textdecoration:"none"}}>
                               <i className="fa-brands fa-facebook-f fa-2xs text-black"></i>
                            </a>
                            <a href="#" className="w-9 h-9 bg-white !no-underline shadow border  rounded flex items-center justify-center hover:bg-gray-100" style={{textdecoration:'none'}}>
                                <i className="fa-brands text-black underline-0 fa-x-twitter"></i>
                            </a>
                            <a href="#" className="w-9 h-9 bg-white shadow border !no-underline rounded flex items-center justify-center hover:bg-gray-100" style={{textdecoration:"none"}}>
                             <i className="fa-brands text-black fa-dribbble"></i>
                            </a>
                            <a href="#" className="w-9 h-9 bg-white shadow border rounded !no-underline flex items-center justify-center hover:bg-gray-100" style={{textdecoration:"none"}}>
                                <i className="fa-brands text-black fa-instagram"></i>
                            </a>
                        </div>

                        <div className="flex space-x-2">
                            <img src={display181} className="w-10 h-12 object-cover rounded" />
                            <img src={display182} className="w-10 h-12 object-cover rounded" />
                            <img src={display183} className="w-10 h-12 object-cover rounded" />
                            <img src={display184} className="w-10 h-12 object-cover rounded" />
                            <img src={display185} className="w-10 h-12 object-cover rounded" />
                        </div>
                    </div>
                </div>

                <div className="border-t mt-10 pt-4 text-center text-sm">
                    © 2025 <span className="text-red-500 font-semibold">Foodzy</span>, All rights reserved.
                </div>
            </footer>
    )
}
export default Footer;