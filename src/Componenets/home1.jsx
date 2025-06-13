import React, { useEffect, useState } from 'react'
import Nevbar from './Nevbar'
import img from "../assets/Background.png";
import img2 from "../assets/freepik.png";
import cackproduct from "../assets/3.jpg.png";
import milkproduct from "../assets/4.jpg.png";
import { Link } from 'react-router';
import banner from "../assets/banner-img .png";
import banner1 from "../assets/1.jpg (1).png";
import banner2 from "../assets/2.jpg.png";
import banner3 from "../assets/3.jpg (1).png";
import banner4 from "../assets/9.jpg.png";
import banner5 from "../assets/10.jpg.png";
import banner6 from "../assets/17.jpg.png";
import background from "../assets/91.jpg.png";
import background1 from "../assets/92.jpg.png";
import background2 from "../assets/93.jpg.png";
import bg from "../assets/section.jpg";
import product1 from "../assets/Listbox → Option.png";
import product2 from "../assets/Listbox → Option (1).png";
import product3 from "../assets/Section → products-rightview.jpg.png";
import product4 from "../assets/1.jpg.jpg";
import product5 from "../assets/2.jpg.jpg";
import product6 from "../assets/3.jpg.jpg";
import Footer from "../Componenets/Fotter";
const home1 = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2026-06-01T00:00:00");
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {
            days: '000',
            hours: '00',
            minutes: '00',
            seconds: '00',
        };

        if (difference > 0) {
            timeLeft = {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(3, '0'),
                hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    return (
        <div>
            <Nevbar />
            <div  >
                <img src={img} alt="" className=" w-full lg:h-full md:h-110" />
                <img src={img2} alt="" className="absolute flex right-1 md:top-45 md:w-3/4  w-3/4 lg:w-2/3 " />
                <div className="relative  w-full">
                    <button className="flex absolute left-11 -top-20  md:left-25 lg:left-53 items-center gap-2 bg-[#cc7a1c] text-white !text-xs lg:px-4  lg:py-2 px-2 py-1 !rounded-full hover:bg-[#b86810] transition duration-300 md:-top-45 w-30 lg:w-auto lg:-top-70 ">
                        <span className="bg-white text-[#cc7a1c] rounded-full w-7 h-7 flex items-center justify-center">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                        ORDER NOW
                    </button>
                    <p className="font-[Montserrat] font-bold md:flex hidden md:text-2xl text-[#CC791D] absolute flex lg:right-70 lg:-top-14 md:right-40 md:-top-12 text-sm">609-791-3583</p>
                    <p className="!font-[Montserrat] font-bold md:flex hidden md:text-md text-white absolute flex lg:right-70 lg:-top-8 md:right-40 md:-top-7 text-sm">www.exemple.com</p>
                </div>
            </div>

            <div className="container mx-auto py-5">
                <div className="grid grid-cols-1 md:grid-cols-3  gap-6 items-start">
                    {/* <!-- Sidebar Categories --> */}
                    <div className="space-y-3">
                        <div className="bg-gray-100  py-2 rounded border text-base border-gray-200 text-red-500 font-semibold text-center">
                            Cake & Milk
                            <p className="text-gray-500 text-sm font-normal">(65 items)</p>
                        </div>
                        <div className="bg-gray-100 py-2 rounded border  text-base border-gray-200 text-center">
                            Fresh Meat
                            <p className="text-gray-500 text-sm font-normal">(30 items)</p>
                        </div>
                        <div className="bg-gray-100 py-2 rounded border  text-base border-gray-200 text-center">
                            Vegetables
                            <p className="text-gray-500 text-sm font-normal">(25 items)</p>
                        </div>
                        <div className="bg-gray-100  py-2 rounded border  text-base border-gray-200 text-center">
                            Apple & Mango
                            <p className="text-gray-500 text-sm font-normal">(45 items)</p>
                        </div>
                        <div className="bg-gray-100  py-2 rounded border  text-base border-gray-200 text-center">
                            Strawberry
                            <p className="text-gray-500 text-sm font-normal">(68 items)</p>
                        </div>
                        <div className="bg-gray-100  py-4 rounded border  text-base border-gray-200 text-center text-red-500 font-semibold">
                            View More
                        </div>
                    </div>

                    {/* <!-- Product Cards --> */}
                    <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* <!-- Cake Card --> */}
                        <div className="relative rounded overflow-hidden shadow-md">
                            <img src={cackproduct} alt="Cake" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-lg font-bold rounded-full">
                                50<span className="text-sm align-top">%</span> OFF
                            </div>
                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                <h2 className="text-white text-lg font-semibold drop-shadow">Cake</h2>
                                <button className="mt-2 bg-red-500  px-4 py-1 rounded shadow hover:bg-red-600 transition">
                                    <Link to="/Products" className='text-white font-semibold !no-underline'>Shop Now</Link>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Milk Card --> */}
                        <div className="relative rounded overflow-hidden shadow-md">
                            <img src={milkproduct} alt="Milk" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-black h-40 w-40 align- item-center flex  text-white text-lg font-bold rounded-full">
                                40<span className="text-sm align-top">%</span> OFF
                            </div>
                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                <h2 className="text-white text-lg font-semibold drop-shadow">Milk</h2>
                                <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded shadow hover:bg-red-600 transition">
                                    <Link to="/Products" className='text-white font-semibold !no-underline'>Shop Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="max-w-screen-xl mx-auto p-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Popular Products</h2>
                    <p className="text-sm text-gray-400 mt-2 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-7">
                    {/* <!-- Sidebar Filters --> */}
                    <div className="space-y-3 gap-3 flex flex-col">
                        <button className="w-full shadow-sm flex justify-between items-center bg-white text-black px-4 py-3 rounded">All <i className="fas fa-arrow-right"></i></button>
                        <button className="w-full shadow-sm flex justify-between items-center bg-white text-black px-4 py-3 rounded">Snack <i className="fas fa-arrow-right"></i></button>
                        <button className="w-full shadow-sm flex justify-between items-center bg-white text-black px-4 py-3 rounded">Vegetable <i className="fas fa-arrow-right"></i></button>
                        <button className="w-full shadow-sm flex justify-between items-center bg-white text-black px-4 py-3 rounded">Fruit <i className="fas fa-arrow-right"></i></button>
                        <button className="w-full shadow-sm flex justify-between items-center bg-white text-black px-4 py-3 rounded">Bakery <i className="fas fa-arrow-right"></i></button>

                        <div className="hidden lg:block mt-4 rounded overflow-hidden">
                            <div className="bg-cover bg-center h-96 text-white p-2" style={{ backgroundImage: `url(${banner})`, height: '460px' }}>
                                <h3 className="text-lg font-bold">Juicy <br /><span className="text-yellow-400 text-2xl">FRUITS</span></h3>
                                <p className="mt-1 text-sm">100% Natural</p>
                                <button className="mt-5 bg-red-500 px-4 py-2 rounded text-sm">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Products Grid --> */}
                    <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {/* <!-- Product Card --> */}
                        <div className="max-w-xs mx-auto p-4 pt-0">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <div className="p-3">
                                    <img src={banner1} alt="Sweet crunchy nut mix"
                                        className="w-full h-48 object-contain rounded-md" />
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                    </div>
                                </div>
                                <div className="text-center p-4 pt-2">
                                    <p className="text-sm text-gray-500">Snacks</p>
                                    <div className="flex justify-center items-center gap-1 mt-1">
                                        <div className="flex text-red-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">(5.0)</span>
                                    </div>
                                    <h3 className="mt-2 !text-sm font-semibold text-gray-800">Sweet crunchy nut mix 250gm pack</h3>
                                    <div className="mt-2">
                                        <span className="text-lg text-red-600 font-bold mr-2">$120.25</span>
                                        <span className="text-sm line-through text-gray-400">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- Repeat similar blocks --> */}
                        <div className="max-w-xs mx-auto p-4 pt-0">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <div className="p-3">
                                    <img src={banner2} alt="Sweet crunchy nut mix"
                                        className="w-full h-48 object-contain rounded-md" />
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                    </div>
                                </div>
                                <div className="text-center p-4 pt-2">
                                    <p className="text-sm text-gray-500">Snacks</p>
                                    <div className="flex justify-center items-center gap-1 mt-1">
                                        <div className="flex text-red-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">(5.0)</span>
                                    </div>
                                    <h3 className="mt-2 font-semibold !text-sm text-gray-800">Sweet crunchy nut mix 250gm pack</h3>
                                    <div className="mt-2">
                                        <span className="text-lg text-red-600 font-bold mr-2">$120.25</span>
                                        <span className="text-sm line-through text-gray-400">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="max-w-xs mx-auto p-4 pt-0">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <div className="p-3">
                                    <img src={banner3} alt="Sweet crunchy nut mix"
                                        className="w-full h-48 object-contain rounded-md" />
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                    </div>
                                </div>
                                <div className="text-center p-4 pt-2">
                                    <p className="text-sm text-gray-500">Snacks</p>
                                    <div className="flex justify-center items-center gap-1 mt-1">
                                        <div className="flex text-red-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">(5.0)</span>
                                    </div>
                                    <h3 className="mt-2 font-semibold !text-sm text-gray-800">Sweet crunchy nut mix 250gm pack</h3>
                                    <div className="mt-2">
                                        <span className="text-lg text-red-600 font-bold mr-2">$120.25</span>
                                        <span className="text-sm line-through text-gray-400">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="max-w-xs mx-auto p-4 pt-0">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <div className="p-3">
                                    <img src={banner4} alt="Sweet crunchy nut mix"
                                        className="w-full h-48 object-contain rounded-md" />
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white border border-gray-300 rounded-full p-2 py-1  -mt-8 z-10">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                    </div>
                                </div>
                                <div className="text-center p-4 pt-2">
                                    <p className="text-sm text-gray-500">Snacks</p>
                                    <div className="flex justify-center items-center gap-1 mt-1">
                                        <div className="flex text-red-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">(5.0)</span>
                                    </div>
                                    <h3 className="mt-2 font-semibold !text-sm text-gray-800">Sweet crunchy nut mix 250gm pack</h3>
                                    <div className="mt-2">
                                        <span className="text-lg text-red-600 font-bold mr-2">$120.25</span>
                                        <span className="text-sm line-through text-gray-400">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="max-w-xs mx-auto p-4 pt-0">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <div className="p-3">
                                    <img src={banner5} alt="Sweet crunchy nut mix"
                                        className="w-full h-48 object-contain rounded-md" />
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                    </div>
                                </div>
                                <div className="text-center p-4 pt-2">
                                    <p className="text-sm text-gray-500">Snacks</p>
                                    <div className="flex justify-center items-center gap-1 mt-1">
                                        <div className="flex text-red-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">(5.0)</span>
                                    </div>
                                    <h3 className="mt-2 font-semibold !text-sm text-gray-800">Sweet crunchy nut mix 250gm pack</h3>
                                    <div className="mt-2">
                                        <span className="text-lg text-red-600 font-bold mr-2">$120.25</span>
                                        <span className="text-sm line-through text-gray-400">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="max-w-xs mx-auto p-4 pt-0">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <div className="p-3">
                                    <img src={banner6} alt="Sweet crunchy nut mix"
                                        className="w-full h-48 object-contain rounded-md" />
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-white border border-gray-300 rounded-full px-2 py-1  -mt-8 z-10">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                    </div>
                                </div>
                                <div className="text-center p-4 pt-2 ">
                                    <p className="text-sm text-gray-500">Snacks</p>
                                    <div className="flex justify-center items-center gap-1 mt-1">
                                        <div className="flex text-red-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">(5.0)</span>
                                    </div>
                                    <h3 className="mt-2 font-semibold !text-sm text-gray-800">Sweet crunchy nut mix 250gm pack</h3>
                                    <div className="mt-2">
                                        <span className="text-lg text-red-600 font-bold mr-2">$120.25</span>
                                        <span className="text-sm line-through text-gray-400">$123.25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* <!-- Card 1 --> */}
                    <div className="bg-green-100 rounded-lg p-6 relative overflow-hidden" style={{ backgroundImage: `url(${background})` }}>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-lg pe-5 font-semibold text-gray-800">Healthy Bakery Products</h3>
                                <p className="text-red-600 text-xl font-bold mt-2">30% <span className="text-gray-600 font-normal text-sm">Off on first order</span></p>
                            </div>
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-max">Shop Now</button>
                        </div>

                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="rounded-lg p-6 relative overflow-hidden" style={{ backgroundImage: `url(${background1})` }}>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-lg font-semibold w-60 pe-3 text-gray-800">Fresh<br /> Snacks & Sweets</h3>
                                <p className="text-red-600 text-xl font-bold mt-2">20% <span className="text-gray-600 font-normal text-sm">Off on first order</span></p>
                            </div>
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-max">Shop Now</button>
                        </div>

                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className="bg-pink-100 rounded-lg p-6 relative overflow-hidden" style={{ backgroundImage: `url(${background2})` }}>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-lg font-semibold pe-5 text-gray-800">Fresh & Healthy Organic Fruits</h3>
                                <p className="text-red-600 text-xl font-bold mt-2">35% <span className="text-gray-600 font-normal text-sm">Off on first order</span></p>
                            </div>
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-max">Shop Now</button>
                        </div>

                    </div>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* <!-- Card 1 --> */}
                    <div className="bg-gray-50 text-center p-6 rounded-lg shadow-sm">
                        {/* <!-- Decorative separator (or icon placeholder) --> */}
                        <h3 className="!text-lg font-semibold text-gray-800">Product Packing</h3>
                        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="bg-gray-50 text-center p-6 rounded-lg shadow-sm">
                        <h3 className="!text-lg font-semibold text-gray-800">24x7 Support</h3>
                        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className="bg-gray-50 text-center p-6 rounded-lg shadow-sm">
                        <h3 className="!text-lg font-semibold text-gray-800">Delivery in 5 Days</h3>
                        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                    {/* <!-- Card 4 --> */}
                    <div className="bg-gray-50 text-center p-6 rounded-lg shadow-sm">
                        <h3 className="!text-lg font-semibold text-gray-800">Payment Secure</h3>
                        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                </div>
            </section>
            <section>
                <div className=" bg-cover bg-center flex items-left justify-left  px-4" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="bg-white bg-opacity-90 p-3 pe-0  lg:ms-30 md:p-10 rounded-lg shadow-lg my-40 lg:max-w-md w-full lg:my-30">
                        <p className="text-red-600 text-sm font-bold !mb-0">
                            35% <span className="text-gray-600 font-normal">OFF</span>
                        </p>
                        <h2 className="!text-2xl md:text-3xl font-semibold text-gray-900 mt-1">
                            Great deal on organic food.
                        </h2>
                        <p className="text-gray-600 text-sm pe-15 !mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            maecenas accumsan lacus vel facilisis.
                        </p>

                        <div className="mt-6 flex md:me-50 lg:me-30 !border-orange-500 justify-between border text-center rounded text-sm font-medium text-gray-700">
                            <div className=" py-2  w-15">
                                <div className="text-lg font-bold">{timeLeft.days}</div>
                                Days
                            </div>
                            <p className='text-2xl my-2'>:</p>
                            <div className="  py-2  w-15">
                                <div className="text-lg font-bold">{timeLeft.hours}</div>
                                Hrs
                            </div>
                            <p className='text-2xl my-2'>:</p>
                            <div className="  py-2  w-15">
                                <div className="text-lg font-bold">{timeLeft.minutes}</div>
                                Min
                            </div>
                            <p className='text-2xl my-2'>:</p>
                            <div className="  py-2  w-15">
                                <div className="text-lg font-bold">{timeLeft.seconds}</div>
                                Sec
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* <!-- Card 1: Pasta --> */}
                    <div className="rounded-lg overflow-hidden w-80  h-110 shadow-md">
                        <img
                            src={product1}
                            alt="Pasta"
                            className="w-full  object-cover"
                        />
                    </div>

                    {/* <!-- Card 2: Pizza --> */}
                    <div className="rounded-lg overflow-hidden flex lg:-left-15 relative w-80 h-110 shadow-md">
                        <img
                            src={product2}
                            alt="Pizza"
                            className="w-full object-cover"
                        />
                    </div>

                    {/* <!-- Card 3: Promo --> */}
                    <div className="lg:w-140 flex lg:-left-30  relative rounded-lg overflow-hidden relative">
                        <div className="relative">
                            <img
                                src={product3}
                                alt="Healthy Vegetables"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>

                            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-right">
                                <h2 className="!text-2xl sm:text-3xl font-bold text-gray-800">
                                    Organic & Healthy <br /> Vegetables
                                </h2>
                                <p className="mt-2 text-lg text-gray-800 font-semibold">
                                    25% <span className="text-sm font-normal text-gray-600">OFF</span>
                                </p>
                                <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow">
                                    <Link to="pages /" className='!no-underline !text-white'>Shop Now </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
          <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Great Words From People
    </h2>
    <p className="text-gray-500 max-w-2xl mx-auto mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
    </p>

    <div className="grid gap-8 md:grid-cols-3 mt-15">
      {/* <!-- Card 1 --> */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm relative text-center">
        <div className="w-30 h-30 mx-auto -mt-16 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Stephen Smith" className="w-full h-full object-cover" />
        </div>
        <p className="mt-6 text-sm text-gray-500 italic">
          “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
        </p>
        <h5 className="mt-4 text-sm text-gray-400">Co Founder</h5>
        <h4 className="font-bold text-lg text-gray-800">Stephen Smith</h4>
        <div className="mt-4 flex justify-center space-x-1 text-red-300">
          <span>—</span><span>—</span><span>—</span>
        </div>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm relative text-center">
        <div className="w-30 h-30 mx-auto -mt-16 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Lorem Robinson" className="w-full h-full object-cover" />
        </div>
        <p className="mt-6 text-sm text-gray-500 italic">
          “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
        </p>
        <h5 className="mt-4 text-sm text-gray-400">Manager</h5>
        <h4 className="font-bold text-lg text-gray-800">Lorem Robinson</h4>
        <div className="mt-4 flex justify-center space-x-1 text-red-300">
          <span>—</span><span>—</span><span>—</span>
        </div>
      </div>

      {/* <!-- Card 3 --> */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm relative text-center">
        <div className="w-30 h-30 mx-auto -mt-16 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Saddika Alard" className="w-full h-full object-cover" />
        </div>
        <p className="mt-6 text-sm text-gray-500 italic">
          “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
        </p>
        <h5 className="mt-4 text-sm text-gray-400">Team Leader</h5>
        <h4 className="font-bold text-lg text-gray-800">Saddika Alard</h4>
        <div className="mt-4 flex justify-center space-x-1 text-red-300">
          <span>—</span><span>—</span><span>—</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Latest News</h2>
    <p className="text-gray-500 mt-2 max-w-xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* <!-- Card 1 --> */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="p-5 text-left">
          <p className="text-sm text-gray-500">By Admin | <span className="text-gray-600">Snacks</span></p>
          <h3 className="text-lg font-semibold text-gray-800 mt-1">
            Urna pretium elit mauris cursus at elit Vestibulum.
          </h3>
          <a href="#" className="!text-green-600 mt-2 inline-block text-sm !no-underline font-medium">
            Read More <span className="!text-green-600"><ion-icon name="arrow-forward-outline"></ion-icon></span>
          </a>
        </div>
        <div className="relative">
          <img src={product4} alt="Post 1" className="w-full h-56 object-cover" />
          <div className="absolute bottom-3 right-3 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow">
            <span className="block leading-tight text-center">
              <span className="block font-semibold text-lg">10</span>
              <span className="uppercase text-xs">Oct</span>
            </span>
          </div>
        </div>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="p-5 text-left">
          <p className="text-sm text-gray-500">By Admin | <span className="text-gray-600">Food</span></p>
          <h3 className="text-lg font-semibold text-gray-800 mt-1">
            Best guide to Shopping for organic ingredients.
          </h3>
          <a href="#" className="!text-green-600 mt-2 inline-block text-sm !no-underline font-medium">
            Read More <span className="!text-green-600"><ion-icon name="arrow-forward-outline"></ion-icon></span>
          </a>
        </div>
        <div className="relative">
          <img src={product5} alt="Post 2" className="w-full h-56 object-cover" />
          <div className="absolute bottom-3 right-3 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow">
            <span className="block leading-tight text-center">
              <span className="block font-semibold text-lg">09</span>
              <span className="uppercase text-xs">Sep</span>
            </span>
          </div>
        </div>
      </div>

 {/* <!-- Card 3 --> */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="p-5 text-left">
          <p className="text-sm text-gray-500">By Admin | <span className="text-gray-600">Snacks</span></p>
          <h3 className="text-lg font-semibold text-gray-800 mt-1">
            Cursus at elit vestibulum urna pretium elit mauris.
          </h3>
          <a href="#" className="!text-green-600 mt-2 inline-block text-sm !no-underline font-medium">
            Read More <span className="!text-green-600"><ion-icon name="arrow-forward-outline"></ion-icon></span>
          </a>
        </div>
        <div className="relative">
          <img src={product6} alt="Post 3" className="w-full h-56 object-cover" />
          <div className="absolute bottom-3 right-3 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow">
            <span className="block leading-tight text-center">
              <span className="block font-semibold text-lg">12</span>
              <span className="uppercase text-xs">Oct</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 <Footer />
 

        </div>
    )
}

export default home1
