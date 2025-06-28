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
import axios from "axios";
import { FaFilter, FaThLarge, FaThList } from 'react-icons/fa';
import { useState, useEffect } from "react";
function Products() {

    const [view, setView] = useState('grid'); // default view
    const [sort, setSort] = useState('featured');

    const [liked, setLiked] = useState(false);
    const [viewed, setViewed] = useState(false);

    const [activeTab, setActiveTab] = useState('description');

    const [selectedWeight, setSelectedWeight] = useState('50kg'); // default selected

    const weights = ['50kg', '80kg', '120kg', '200kg'];

    const [quantity, setQuantity] = useState(0); // default value

    const handleChange = (e) => {
        const value = Math.max(0, parseInt(e.target.value) || 0); // enforce min = 1
        setQuantity(value);
    };

    const tabClasses = (tabName) =>
        `tab-button px-4 py-2 focus:outline-none border-b-2 transition-colors duration-300 ${activeTab === tabName
            ? 'text-red-500 border-red-500'
            : 'text-gray-500 hover:text-red-500 border-transparent'}`;

            
  const handleAddToCart = async () => {
  const token = localStorage.getItem("token");
  console.log("Token before add to cart:", token); // Debug log
  if (!token) {
    alert("You must be logged in to add items to the cart.");
    return;
  }
  // Set these values as per your product
  const productId = "6790aefbeea87354a2095027";
  const price = 23000;
  const quantityToAdd = quantity > 0 ? quantity : 1;
  const productSize = "12GB+512GB"; // Use the correct size for your API
  const productColour = "Black";
  const totalPrice = price * quantityToAdd;

  try {
    const response = await axios.post(
      "https://ecommerce-shop-qg3y.onrender.com/api/cart/addToCart",
      {
        productId,
        quantity: quantityToAdd,
        price,
        totalPrice,
        productColour,
        productSize,
      },
      {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(" Add to cart response:", response.data);
    alert("Product added to cart successfully!");
  } catch (err) {
    console.error(" Error adding to cart:", err.response?.data || err.message);

    if (err.response?.status === 401) {
      alert("Unauthorized. Please log in again.");
    } else {
      alert("Failed to add to cart.");
    }
  }
};

    // API products state for Popular Products
    const [apiProducts, setApiProducts] = useState([]);
    const [apiLoading, setApiLoading] = useState(true);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        setApiLoading(true);
        setApiError(null);
        // Fetch all products from the API (no id param)
        axios.get("https://ecommerce-shop-qg3y.onrender.com/api/product/displayAll?category=")
            .then(res => {
                // Handle both array and single product object
                if (res.data && res.data.data) {
                    if (Array.isArray(res.data.data)) {
                        setApiProducts(res.data.data);
                    } else if (res.data.data.product) {
                        setApiProducts([res.data.data.product]);
                    } else {
                        setApiProducts([]);
                    }
                } else {
                    setApiProducts([]);
                }
                setApiLoading(false);
            })
            .catch(err => {
                setApiError("Failed to load products");
                setApiLoading(false);
            });
    }, []);

    return (
        <div>

            <Nevbar />
            <div className="flex text-white bg-red-600 justify-between  py-3 lg:ps-42 px-4 lg:pe-37 ">
                <p className="m-0">Product</p>
                <p className="m-0">Home / Product</p>
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

            <div className=" lg:flex">
                <div className="w-full max-w-xs p-4 bg-white ms-12 h-253  flex rounded-lg shadow-md md:space-y-6">
                    <div className="w-full max-w-xs p-4 bg-white rounded shadow-md space-y-6">

                        {/* <!-- Product Category --> */}
                        <div>
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
                            <button className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition duration-200">
                                Filter
                            </button>
                        </div>

                        {/* <!-- Product Category Colors --> */}
                        <div>
                            <h3 className="text-lg font-semibold border-b pb-2 mb-3">Colors</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between items-center">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox mr-2" />
                                        Blue
                                    </label>
                                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox mr-2" />
                                        Yellow
                                    </label>
                                    <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox mr-2" />
                                        Red
                                    </label>
                                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
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
                            <h3 className="text-lg font-semibold border-b pb-2 mb-3">Product Tags</h3>
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
                    <div className="max-w-6xl   md:mr-10 px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
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
                                    {weights.map((weight) => (
                                        <button
                                            key={weight}
                                            onClick={() => setSelectedWeight(weight)}
                                            className={`px-3 py-1 rounded text-sm transition-all 
                                                    ${selectedWeight === weight
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-red-100'}`}
                                        >
                                            {weight}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* <!-- Add to Cart --> */}
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <div className="flex items-center border rounded">
                                    <button className="px-2 pb-2 !text-3xl">-</button>
                                    <input
                                        type="number"
                                        className="w-8 text-center border-0"
                                        value={quantity}
                                        min="0"
                                        onChange={handleChange}
                                    />
                                    <button className="px-2 !text-lg"><ion-icon name="add-outline"></ion-icon></button>
                                </div>
                                <button
  onClick={handleAddToCart}
  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow"
>
  Add To Cart
</button>
                                <div className="flex space-x-2">
                                    {/* Heart Icon Button */}
                                    <button
                                        onClick={() => setLiked(!liked)}
                                        className="border p-2 rounded hover:bg-gray-100 transition-colors"
                                    >
                                        <i className={`fas fa-heart ${liked ? 'text-red-500' : 'text-gray-600'}`}></i>
                                    </button>

                                    {/* Eye Icon Button */}
                                    <button
                                        onClick={() => setViewed(!viewed)}
                                        className="border p-2 rounded hover:bg-gray-100 transition-colors"
                                    >
                                        <i className={`fas fa-eye ${viewed ? 'text-red-500' : 'text-gray-600'}`}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl bg-white md:ms-4 rounded-md shadow p-6">
                        {/* Tabs */}
                        <div className="flex border-b text-sm font-medium">
                            <button
                                className={tabClasses('description')}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </button>
                            <button
                                className={tabClasses('information')}
                                onClick={() => setActiveTab('information')}
                            >
                                Information
                            </button>
                            <button
                                className={tabClasses('review')}
                                onClick={() => setActiveTab('review')}
                            >
                                Review
                            </button>
                        </div>

                        {/* Tab Contents */}
                        {activeTab === 'description' && (
                            <div className="tab-content mt-6 text-sm text-gray-700 space-y-6">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio,
                                    error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae
                                    in perferendis doloribus debitis corporis. Eaque dicta, repellat amet, illum adipisci
                                    vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione
                                    alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos
                                    consectetur quae vero in perferendis provident quis.
                                </p>
                                <div>
                                    <h4 className="text-base font-semibold mb-2">Packaging & Delivery</h4>
                                    <hr className="mb-3" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis
                                        dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio,
                                        error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur
                                        quae vero in perferendis provident quis.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'information' && (
                            <div className="tab-content mt-6 text-sm text-gray-700">
                                <p>
                                    This is the <strong>Information</strong> tab content. Add relevant details here.
                                </p>
                            </div>
                        )}

                        {activeTab === 'review' && (
                            <div className="tab-content mt-6 text-sm text-gray-700">
                                <p>
                                    This is the <strong>Review</strong> tab content. Add customer feedback and ratings here.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <section className="max-w-7xl my-20 mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Popular Products</h2>
                    <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>

                {/* <!-- Product Grid --> */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {apiLoading && (
                        <div className="col-span-full text-center text-gray-500">Loading products...</div>
                    )}
                    {apiError && (
                        <div className="col-span-full text-center text-red-500">{apiError}</div>
                    )}
                    {apiProducts && apiProducts.length > 0 ? (
                        apiProducts.map((item, idx) => (
                            <div key={item._id || idx} className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                                <div className="bg-gray-50 p-4 rounded">
                                    <img src={item.product_images && item.product_images[0] ? item.product_images[0] : product} alt={item.name} className="mx-auto h-40 object-contain" />
                                </div>
                                <div className="mt-4">
                                    <p className="text-xs text-gray-400">{item.categoryName || 'Category'}</p>
                                    <p className="text-xs text-gray-400">({item.stock || 'In Stock'})</p>
                                    <h3 className="!text-sm font-semibold mt-1">{item.name}</h3>
                                    <p className="text-red-600 font-bold mt-2">${item.price} <span className="line-through text-gray-400 text-sm ml-1">${(item.price * 1.1).toFixed(2)}</span></p>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Fallback Static Cards (unchanged)
                        <>
                        <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                            <div className="bg-gray-50 p-4 rounded">
                                <img src={product} alt="Product" className="mx-auto h-40 object-contain" />
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-400">Snacks</p>
                                <p className="text-xs text-gray-400">(4.5)</p>
                                <h3 className="!text-sm font-semibold mt-1">Best snakes with hazel nut mix pack 200gm</h3>
                                <p className="text-red-600 font-bold mt-2">$120.25 <span className="line-through text-gray-400 text-sm ml-1">$123.25</span></p>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                            <div className="bg-gray-50 p-4 rounded">
                                <img src={product1} alt="Product" className="mx-auto h-40 object-contain" />
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-400">Snacks</p>
                                <p className="text-xs text-gray-400">(5.0)</p>
                                <h3 className="!text-sm font-semibold mt-1">Sweet snakes crunchy nut mix 250gm pack</h3>
                                <p className="text-red-600 font-bold mt-2">$100.00 <span className="line-through text-gray-400 text-sm ml-1">$110.00</span></p>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                            <div className="bg-gray-50 p-4 rounded">
                                <img src={banner1} alt="Product" className="mx-auto h-40 object-contain" />
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-400">Snacks</p>
                                <p className="text-xs text-gray-400">(4.5)</p>
                                <h3 className="!text-sm font-semibold mt-1">Best snakes with hazel nut mix pack 200gm</h3>
                                <p className="text-red-600 font-bold mt-2">$120.25 <span className="line-through text-gray-400 text-sm ml-1">$123.25</span></p>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                            <div className="bg-gray-50 p-4 rounded">
                                <img src={banner2} alt="Product" className="mx-auto h-40 object-contain" />
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-400">Snacks</p>
                                <p className="text-xs text-gray-400">(5.0)</p>
                                <h3 className="!text-sm font-semibold mt-1">Sweet snakes crunchy nut mix 250gm pack</h3>
                                <p className="text-red-600 font-bold mt-2">$100.00 <span className="line-through text-gray-400 text-sm ml-1">$110.00</span></p>
                            </div>
                        </div>
                        </>
                    )}
                </div>
            </section>

            <div className="flex justify-center my-8">
                <nav className="inline-flex items-center border border-gray-300 rounded overflow-hidden">
                    <Link to="/"> <button
                        onClick={() => setView('Previu')}
                        className={`p-2 rounded border transition-colors duration-200 ${view === 'Filter'
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-black border-gray-300 !hover:bg-red-200 !hover:text-red-600 !hover:border-red-600'
                            }`}
                    >Previous</button></Link>
                    <Link to="/products"> <button onClick={() => setView('Previu')} className="px-4 py-2 bg-red-600 text-white border-l border-gray-300 hover:bg-red-700">1</button></Link>
                    <Link to="/Productlist2">  <button className="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 !hover:bg-red-700">2</button></Link>
                    <Link to="/Allproductlist"> <button className="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 hover:bg-red-700">3</button></Link>
                    <button className="px-4 py-2 bg-white text-gray-700 border-l border-gray-300 hover:bg-red-700">Next</button>
                </nav>
            </div>

            <Footer />

        </div>

    )
}
export default Products;
