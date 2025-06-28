import React, { useState, useEffect } from 'react'
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
import product5 from "./assets/13.jpg.png";
import { FaFilter, FaThLarge, FaThList } from 'react-icons/fa';
import { Link } from 'react-router';

const Allproductlist = () => {
    const [view, setView] = useState('grid'); // default view
    const [sort, setSort] = useState('featured');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://ecommerce-shop-qg3y.onrender.com/api/product/displayAll?category=')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                setProducts(data.data || []);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Nevbar />
            <div className="flex text-white bg-red-600 justify-between  py-3 lg:ps-42 lg:pe-37  ">
                <p className="m-0">Product</p>
                <p className="m-0">Home/ Allproducts</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-evenly sm:items-center border border-gray-200 p-3 rounded-md bg-gray-50">
                <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-0">
                    <button
                        onClick={() => setView('Filter')}
                        className={`p-2 rounded border transition-colors duration-200 ${view === 'Filter'
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-black border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-600'
                            }`}
                    >
                        <FaFilter />
                    </button>

                    <button
                        onClick={() => setView('grid')}
                        className={`p-2 rounded border transition-colors duration-200 ${view === 'grid'
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-black border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-600'
                            }`}
                    >
                        <FaThLarge />
                    </button>

                    <button
                        onClick={() => setView('list')}
                        className={`p-2 rounded border transition-colors duration-200 ${view === 'list'
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-black border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-600'
                            }`}
                    >
                        <FaThList />
                    </button>

                    <span className="ml-3 text-sm text-gray-700">
                        We found <span className="font-semibold">29</span> items for you!
                    </span>
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
            <div className="lg:col-span-4 grid sm:grid-cols-2 mx-auto lg:grid-cols-4 mt-10 gap-3">
                {/* Render API products first */}
                {loading && <div className="col-span-4 text-center">Loading...</div>}
                {error && <div className="col-span-4 text-center text-red-500">{error}</div>}
                {!loading && !error && products.map((item) => (
                    <div key={item._id} className="max-w-xs mx-auto p-4 pt-0">
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="p-5">
                                <img src={item.product_images && item.product_images.length > 0 ? item.product_images[0] : banner1} alt={item.name}
                                    className="w-full h-48 object-contain rounded-md" />
                            </div>
                            <div className="flex justify-center">
                                <Link to="/Products" className='text-black'>
                                    <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                    </div>
                                </Link>
                            </div>
                            <div className="text-center p-4 pt-2">
                                <p className="text-sm text-gray-500">{item.categoryName || 'Category'}</p>
                                <div className="flex justify-center items-center gap-1 mt-1">
                                    <div className="flex text-red-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    </div>
                                    <span className="text-sm text-gray-600">(5.0)</span>
                                </div>
                                <h3 className="mt-2 !text-sm font-semibold text-gray-800">{item.name}</h3>
                                <div className="mt-2">
                                    <span className="text-lg text-red-600 font-bold mr-2">₹{item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
                <div className="max-w-xs mx-auto p-4 pt-0">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="p-3">
                            <img src={banner1} alt="Sweet crunchy nut mix" className="w-full h-48 object-contain rounded-md" />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Products" className='text-black'>
                                <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-4 pt-2">
                            <p className="text-sm text-gray-500">Snacks</p>
                            <div className="flex justify-center items-center gap-1 mt-1">
                                <div className="flex text-red-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
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
                <div className="max-w-xs mx-auto p-4 pt-0">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="p-3">
                            <img src={banner2} alt="Organic dried fruit mix" className="w-full h-48 object-contain rounded-md" />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Products" className='text-black'>
                                <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-4 pt-2">
                            <p className="text-sm text-gray-500">Dried Fruits</p>
                            <div className="flex justify-center items-center gap-1 mt-1">
                                <div className="flex text-red-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                </div>
                                <span className="text-sm text-gray-600">(5.0)</span>
                            </div>
                            <h3 className="mt-2 !text-sm font-semibold text-gray-800">Organic dried fruit mix 300gm pack</h3>
                            <div className="mt-2">
                                <span className="text-lg text-red-600 font-bold mr-2">$150.75</span>
                                <span className="text-sm line-through text-gray-400">$155.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="max-w-xs mx-auto p-4 pt-0">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="p-3">
                            <img src={banner4} alt="Organic dried fruit mix" className="w-full h-48 object-contain rounded-md" />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Products" className='text-black'>
                                <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-4 pt-2">
                            <p className="text-sm text-gray-500">Dried Fruits</p>
                            <div className="flex justify-center items-center gap-1 mt-1">
                                <div className="flex text-red-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                </div>
                                <span className="text-sm text-gray-600">(5.0)</span>
                            </div>
                            <h3 className="mt-2 !text-sm font-semibold text-gray-800">Organic dried fruit mix 300gm pack</h3>
                            <div className="mt-2">
                                <span className="text-lg text-red-600 font-bold mr-2">$150.75</span>
                                <span className="text-sm line-through text-gray-400">$155.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="max-w-xs mx-auto p-4 pt-0">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="p-3">
                            <img src={banner5} alt="Organic dried fruit mix" className="w-full h-48 object-contain rounded-md" />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Products" className='text-black'>
                                <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-4 pt-2">
                            <p className="text-sm text-gray-500">Dried Fruits</p>
                            <div className="flex justify-center items-center gap-1 mt-1">
                                <div className="flex text-red-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                </div>
                                <span className="text-sm text-gray-600">(5.0)</span>
                            </div>
                            <h3 className="mt-2 !text-sm font-semibold text-gray-800">Organic dried fruit mix 300gm pack</h3>
                            <div className="mt-2">
                                <span className="text-lg text-red-600 font-bold mr-2">$150.75</span>
                                <span className="text-sm line-through text-gray-400">$155.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="max-w-xs mx-auto p-4 pt-0">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="p-3">
                            <img src={banner6} alt="Organic dried fruit mix" className="w-full h-48 object-contain rounded-md" />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Products" className='text-black'>
                                <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-4 pt-2">
                            <p className="text-sm text-gray-500">Dried Fruits</p>
                            <div className="flex justify-center items-center gap-1 mt-1">
                                <div className="flex text-red-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                </div>
                                <span className="text-sm text-gray-600">(5.0)</span>
                            </div>
                            <h3 className="mt-2 !text-sm font-semibold text-gray-800">Organic dried fruit mix 300gm pack</h3>
                            <div className="mt-2">
                                <span className="text-lg text-red-600 font-bold mr-2">$150.75</span>
                                <span className="text-sm line-through text-gray-400">$155.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="max-w-xs mx-auto p-4 pt-0">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="p-3">
                            <img src={product3} alt="Organic dried fruit mix" className="w-full h-48 object-contain rounded-md" />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Products" className='text-black'>
                                <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-4 pt-2">
                            <p className="text-sm text-gray-500">Dried Fruits</p>
                            <div className="flex justify-center items-center gap-1 mt-1">
                                <div className="flex text-red-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                </div>
                                <span className="text-sm text-gray-600">(5.0)</span>
                            </div>
                            <h3 className="mt-2 !text-sm font-semibold text-gray-800">Organic dried fruit mix 300gm pack</h3>
                            <div className="mt-2">
                                <span className="text-lg text-red-600 font-bold mr-2">$150.75</span>
                                <span className="text-sm line-through text-gray-400">$155.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="max-w-xs mx-auto p-4 pt-0">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="p-3">
                            <img src={product4} alt="Organic dried fruit mix" className="w-full h-48 object-contain rounded-md" />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Products" className='text-black'>
                                <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-4 pt-2">
                            <p className="text-sm text-gray-500">Dried Fruits</p>
                            <div className="flex justify-center items-center gap-1 mt-1">
                                <div className="flex text-red-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                </div>
                                <span className="text-sm text-gray-600">(5.0)</span>
                            </div>
                            <h3 className="mt-2 !text-sm font-semibold text-gray-800">Organic dried fruit mix 300gm pack</h3>
                            <div className="mt-2">
                                <span className="text-lg text-red-600 font-bold mr-2">$150.75</span>
                                <span className="text-sm line-through text-gray-400">$155.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs mx-auto p-4 pt-0">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="p-3">
                            <img src={product5} alt="Gourmet chocolate box" className="w-full h-48 object-contain rounded-md" />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Products" className='text-black'>
                                <div className="bg-white border border-gray-300 rounded-full p-2 py-1 -mt-8 z-10">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-4 pt-2">
                            <p className="text-sm text-gray-500">Chocolates</p>
                            <div className="flex justify-center items-center gap-1 mt-1">
                                <div className="flex text-red-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.897 1.417 8.268L12 18.896 4.583 23.913 6 15.645 0 9.748l8.332-1.593z" /></svg>
                                </div>
                                <span className="text-sm text-gray-600">(5.0)</span>
                            </div>
                            <h3 className="mt-2 !text-sm font-semibold text-gray-800">Gourmet chocolate box 500gm</h3>
                            <div className="mt-2">
                                <span className="text-lg text-red-600 font-bold mr-2">$250.00</span>
                                <span className="text-sm line-through text-gray-400">$260.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-8">
                <nav className="inline-flex items-center border border-gray-300 rounded overflow-hidden">
                    <Link to="/"><button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">Previous</button></Link>
                    <Link to="/products"> <button className="px-4 py-2 bg-red-600 text-white border-l border-gray-300 hover:bg-red-700">1</button></Link>
                    <Link to="/Productlist2">  <button className="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 !hover:bg-red-700">2</button></Link>
                    <Link to="/Allproductlist"> <button className="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 hover:bg-red-700">3</button></Link>
                    <button className="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 hover:bg-red-700">Next</button>
                </nav>
            </div>

            <Footer />
        </div>
    )
}


export default Allproductlist;