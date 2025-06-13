import Footer from "./Componenets/Fotter";
import Nevbar from "./Componenets/Nevbar";
import product from "./assets/9.jpg.png";
import product1 from "./assets/10.jpg.png";
import product3 from "./assets/11.jpg.png";
import product4 from "./assets/12.jpg.png";
import product5 from "./assets/13.jpg.png";
import banner1 from "./assets/1.jpg (1).png";
import banner2 from "./assets/2.jpg.png";
import { Link } from "react-router";
import { FaFilter, FaThLarge, FaThList } from 'react-icons/fa';
import { useState } from "react";
function Products() {

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
                    <button className={`p-2 rounded border ${view === 'Filter'
                                ? 'bg-red-600 text-white'
                                : 'bg-white text-black hover:bg-gray-100'
                            }`}>
                        <FaFilter />
                    </button>
                    <button
                        onClick={() => setView('grid')}
                        className={`p-2 rounded border ${view === 'grid'
                                ? 'bg-red-600 text-white'
                                : 'bg-white text-black hover:bg-gray-100'
                            }`}
                    >
                        <FaThLarge />
                    </button>
                    <button
                        onClick={() => setView('list')}
                        className={`p-2 rounded border ${view === 'list'
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
            
            <div className=" lg:flex">
                <div className="w-full max-w-xs p-4 bg-white m-10 h-253  flex rounded-lg shadow-md space-y-6">
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
                <div>
                    <div className="max-w-6xl   mr-10 px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {/* <!-- Left: Product Image + Thumbnails --> */}
                        <div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <img src={product} alt="Main Product" className="w-full mx-auto" />
                            </div>

                            <div className="mt-4 flex gap-2 flex-wrap">
                                <img src={product} className="w-19 h-19 border rounded-md p-1 cursor-pointer hover:border-red-500" />
                                <img src={product1} className="w-19 h-19 border rounded-md p-1 cursor-pointer hover:border-red-500" />
                                <img src={product3} className="w-19 h-19 border rounded-md p-1 cursor-pointer hover:border-red-500" />
                                <img src={product4} className="w-19 h-19 border rounded-md p-1 cursor-pointer hover:border-red-500" />
                                <img src={product5} className="w-19 h-19 border rounded-md p-1 cursor-pointer hover:border-red-500" />
                            </div>
                        </div>

                        {/* <!-- Right: Product Info --> */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Seeds Of Change Organic Quinoa, Brown</h2>
                            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>

                            <div className="border-b my-4"></div>

                            {/* <!-- Reviews --> */}
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                <div className="text-red-500 text-lg">★★★★★</div>
                                <span>( 75 Review )</span>
                            </div>

                            {/* <!-- Details List --> */}
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex"><span className="w-32 font-medium">Brand</span>: ESTA BETTERU CO</div>
                                <div className="flex"><span className="w-32 font-medium">Flavour</span>: Super Saver Pack</div>
                                <div className="flex"><span className="w-32 font-medium">Diet Type</span>: Vegetarian</div>
                                <div className="flex"><span className="w-32 font-medium">Weight</span>: 200 Grams</div>
                                <div className="flex"><span className="w-32 font-medium">Speciality</span>: Gluten Free, Sugar Free</div>
                                <div className="flex"><span className="w-32 font-medium">Info</span>: Egg Free, Allergen-Free</div>
                                <div className="flex"><span className="w-32 font-medium">Items</span>: 1</div>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="mt-6 text-red-600 text-2xl font-semibold">
                                $120.25 <span className="text-gray-400 line-through text-base ml-2">$123.25</span>
                            </div>

                            {/* <!-- Size Options --> */}
                            <div className="mt-4">
                                <p className="font-semibold text-sm mb-2">Size/Weight :</p>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">50kg</button>
                                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-red-100">80kg</button>
                                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-red-100">120kg</button>
                                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-red-100">200kg</button>
                                </div>
                            </div>

                            {/* <!-- Add to Cart --> */}
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <div className="flex items-center border rounded">
                                    <button className="px-3 text-lg">-</button>

                                    <button className="px-3 text-lg"><ion-icon name="add-outline"></ion-icon></button>
                                </div>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow">Add To Cart</button>
                                <button className="border p-2 rounded hover:bg-gray-100"><i className="fas fa-heart text-gray-600"></i></button>
                                <button className="border p-2 rounded hover:bg-gray-100"><i className="fas fa-eye text-gray-600"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl bg-white rounded-md shadow p-6">
                        {/* <!-- Tabs --> */}
                        <div className="flex border-b text-sm font-medium text-gray-500">
                            <button className="tab-button px-4 py-2 focus:outline-none border-b-2 transition-colors duration-300 text-red-500 border-red-500" data-tab="description">Description</button>
                            <button className="tab-button px-4 py-2 focus:outline-none border-b-2 hover:text-red-500" data-tab="information">Information</button>
                            <button className="tab-button px-4 py-2 focus:outline-none border-b-2 hover:text-red-500" data-tab="review">Review</button>
                        </div>

                        {/* <!-- Tab Contents --> */}
                        <div className="tab-content mt-6   text-sm text-gray-700 space-y-6" id="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribus debitis corporis.
                                Eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem.
                                Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.
                            </p>
                            <div>
                                <h4 className="text-base font-semibold mb-2">Packaging & Delivery</h4>
                                <hr className="mb-3" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis dolor! Quis vel consequuntur repellat distinctio rem.
                                    Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.
                                </p>
                            </div>
                        </div>

                        <div className="tab-content mt-6 text-sm text-gray-700 hidden" id="information">
                            <p >This is the <strong>Information</strong> tab content. Add relevant details here.</p>
                        </div>

                        <div className="tab-content mt-6 text-sm text-gray-700 hidden" id="review">
                            <p>This is the <strong>Review</strong> tab content. Add customer feedback and ratings here.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section class="max-w-7xl my-20 mx-auto">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold">Popular Products</h2>
                    <p class="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>

                {/* <!-- Product Grid --> */}
                <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* <!-- Card --> */}
                    <div class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-50 p-4 rounded">
                            <img src={product} alt="Product" class="mx-auto h-40 object-contain" />
                        </div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-400">Snacks</p>
                            <p class="text-xs text-gray-400">(4.5)</p>
                            <h3 class="!text-sm font-semibold mt-1">Best snakes with hazel nut mix pack 200gm</h3>
                            <p class="text-red-600 font-bold mt-2">$120.25 <span class="line-through text-gray-400 text-sm ml-1">$123.25</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-50 p-4 rounded">
                            <img src={product1} alt="Product" class="mx-auto h-40 object-contain" />
                        </div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-400">Snacks</p>
                            <p class="text-xs text-gray-400">(5.0)</p>
                            <h3 class="!text-sm font-semibold mt-1">Sweet snakes crunchy nut mix 250gm pack</h3>
                            <p class="text-red-600 font-bold mt-2">$100.00 <span class="line-through text-gray-400 text-sm ml-1">$110.00</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-50 p-4 rounded">
                            <img src={banner1} alt="Product" class="mx-auto h-40 object-contain" />
                        </div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-400">Snacks</p>
                            <p class="text-xs text-gray-400">(4.5)</p>
                            <h3 class="!text-sm font-semibold mt-1">Best snakes with hazel nut mix pack 200gm</h3>
                            <p class="text-red-600 font-bold mt-2">$120.25 <span class="line-through text-gray-400 text-sm ml-1">$123.25</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-50 p-4 rounded">
                            <img src={banner2} alt="Product" class="mx-auto h-40 object-contain" />
                        </div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-400">Snacks</p>
                            <p class="text-xs text-gray-400">(5.0)</p>
                            <h3 class="!text-sm font-semibold mt-1">Sweet snakes crunchy nut mix 250gm pack</h3>
                            <p class="text-red-600 font-bold mt-2">$100.00 <span class="line-through text-gray-400 text-sm ml-1">$110.00</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="flex justify-center my-8">
                <nav class="inline-flex items-center border border-gray-300 rounded overflow-hidden">
                   <Link to="/"> <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">Previous</button></Link>
                    <Link to="/products"> <button class="px-4 py-2 bg-red-600 text-white border-l border-gray-300 hover:bg-red-700">1</button></Link>
                    <Link to="/Productlist2">  <button class="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 !hover:bg-red-700">2</button></Link>
                    <Link to="/Allproductlist"> <button class="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 hover:bg-red-700">3</button></Link>
                    <button class="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 hover:bg-red-700">Next</button>
                </nav>
            </div>

            <Footer />

        </div>

    )
}
export default Products;
