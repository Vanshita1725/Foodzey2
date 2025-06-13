import React, { useState } from 'react'
import Nevbar from './Componenets/Nevbar';
import Footer from './Componenets/Fotter';
import banner1 from "./assets/1.jpg (1).png";
import banner2 from "./assets/2.jpg.png";
import banner3 from "./assets/3.jpg (1).png";
import banner4 from "./assets/9.jpg.png";
import banner5 from "./assets/10.jpg.png";
import banner6 from "./assets/17.jpg.png";
import product3 from "./assets/11.jpg.png";
import product4 from "./assets/12.jpg.png";
import { FaFilter, FaThLarge, FaThList } from 'react-icons/fa';
import product5 from "./assets/13.jpg.png";
import { Link } from 'react-router';
const Productlist2 = () => {
    const [view, setView] = useState('grid');
  const [sort, setSort] = useState('featured');

  return (
    <div>
        <Nevbar />
         <div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center ">
                <p className="m-0">Product</p>
                <p className="m-0">Home-Product</p>
            </div>

        <div className="flex flex-col sm:flex-row sm:justify-evenly sm:items-center border border-gray-200 p-3 rounded-md bg-gray-50">
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <button className="p-2 bg-white rounded hover:bg-gray-100 border">
          <FaFilter />
        </button>
        <button
          onClick={() => setView('grid')}
          className={`p-2 rounded border ${
            view === 'grid'
              ? 'bg-red-600 text-white'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          <FaThLarge />
        </button>
        <button
          onClick={() => setView('list')}
          className={`p-2 rounded border ${
            view === 'list'
              ? 'bg-red-600 text-white'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          <FaThList />
        </button>
        <span className="ml-3 text-sm text-gray-700">We found 29 items for you!</span>
      </div>

      <div>
        <label className="text-sm text-gray-600 mr-2">Sort By :</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-1 border rounded bg-white text-sm text-gray-700"
        >
          <option value="featured">Featured</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
       
        <div className='lg:flex'> 
        
            
            <div className="w-full max-w-xs p-4 bg-white m-10 flex rounded-lg h-210 shadow-md space-y-6">
                <div>               {/* <!-- Product Category --> */}
                    <div className="p-3">
                        <h3 className="text-lg font-semibold border-b pb-2 mb-3">Product Category</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between items-center">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox text-red-500 mr-2" />
                                    Juice & Drinks
                                </label>
                                <span className="text-gray-500 text-sm">[20]</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox text-red-500 mr-2" />
                                    Dairy & Milk
                                </label>
                                <span className="text-gray-500 text-sm">[54]</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox text-red-500 mr-2" />
                                    Snack & Spice
                                </label>
                                <span className="text-gray-500 text-sm">[64]</span>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Filter By Price --> */}
                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2 mb-3">Filter By Price</h3>
                        <p className="font-semibold text-gray-800 mb-3">Price : $20 - $250</p>
                        <button className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition">
                            Filter
                        </button>
                    </div>

                    {/* <!-- Product Category Colors --> */}
                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2 mb-3">Product Category</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between items-center">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox mr-2" />
                                    Blue
                                </label>
                                <span className="w-4 h-4 rounded bg-blue-500"></span>
                            </li>
                            <li className="flex justify-between items-center">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox mr-2" />
                                    Yellow
                                </label>
                                <span className="w-4 h-4 rounded bg-yellow-400"></span>
                            </li>
                            <li className="flex justify-between items-center">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox mr-2" />
                                    Red
                                </label>
                                <span className="w-4 h-4 rounded bg-red-500"></span>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Weight --> */}
                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2 mb-3">Weight</h3>
                        <ul className="space-y-2">
                            <li><label className="inline-flex items-center"><input type="checkbox" className="form-checkbox mr-2" /> 2kg Pack</label></li>
                            <li><label className="inline-flex items-center"><input type="checkbox" className="form-checkbox mr-2" /> 20kg Pack</label></li>
                            <li><label className="inline-flex items-center"><input type="checkbox" className="form-checkbox mr-2" /> 30kg Pack</label></li>
                        </ul>
                    </div>

                    {/* <!-- Product Tags --> */}
                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2 mb-3">Products Tages</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Vegetables</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Juice</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Food</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Dry Fruits</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Vegetables</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Juice</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-3">
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
                                                <img src={banner4} alt="Sweet crunchy nut mix"
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
                                    </div>  <div className="max-w-xs mx-auto p-4 pt-0">
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
                                    </div>  <div className="max-w-xs mx-auto p-4 pt-0">
                                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                                            <div className="p-3">
                                                <img src={banner6} alt="Sweet crunchy nut mix"
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
                                                <img src={product5} alt="Sweet crunchy nut mix"
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
                                                <img src={product3} alt="Sweet crunchy nut mix"
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
                                                <img src={product4} alt="Sweet crunchy nut mix"
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
            <div>
</div>
      </div>
       <div class="flex justify-center my-8">
  <nav class="inline-flex items-center border border-gray-300 rounded overflow-hidden">
  <Link to="/">  <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">Previous</button></Link>
   <Link to="/products"> <button class="px-4 py-2 bg-red-600 text-white border-l border-gray-300 hover:bg-red-700">1</button></Link>
   <Link to="/Productlist2">  <button class="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 !hover:bg-red-700">2</button></Link>
   <Link to="/Allproductlist"> <button class="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 !hover:bg-red-700">3</button></Link>
    <button class="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 hover:bg-red-700">Next</button>
  </nav>
</div>
      <Footer />
    </div>
  )
}

export default Productlist2;
