import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nevbar from "./Componenets/Nevbar";
import img1 from "./assets/DeWatermark.jpg";
import img from "./assets/Heading-Text.png";
import pngwing4 from "./assets/pngwing 4.png";
import pngwing7 from "./assets/pngwing 7.png";
import pngwing6 from "./assets/pngwing 6.png";
import pngwing3 from "./assets/pngwing 3.png";
import frame45 from "./assets/Frame 45.png";
import banner from "./assets/banner.jpg";
import banner1 from "./assets/product-2-1.png";
import salad1 from "./assets/Fattoush salad.png";
import salad2 from "./assets/Vegetable salad.png";
import salad3 from "./assets/Egg salad.png";
import banner5 from "./assets/banner-5.png";
import banner6 from "./assets/banner-6.png";
import banner7 from "./assets/banner-7.png";
import banner8 from "./assets/banner-8.png";
import image28 from "./assets/image 28.png";
import icon01 from "./assets/01.png";
import icon02 from "./assets/02.png";
import icon03 from "./assets/03.png";
import fotter from "./assets/fotter.jpg";
import offers from "./assets/icon-1.svg fill.png";
import offers1 from "./assets/icon-2.svg.png";
import offers2 from "./assets/icon-3.svg.png";
import offers3 from "./assets/icon-4.svg.png";
import offers4 from "./assets/icon-5.svg.png";
import Footer from "./Componenets/Fotter";

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [loadingAllProducts, setLoadingAllProducts] = useState(true);
  const [errorAllProducts, setErrorAllProducts] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingAllProducts(true);
      setErrorAllProducts(null);
      try {
        const response = await axios.get(
          "https://ecommerce-shop-qg3y.onrender.com/api/product/displayAllProduct"
        );
        if (response.data?.data && Array.isArray(response.data.data)) {
          setAllProducts(response.data.data);
        }
      } catch (err) {
        setErrorAllProducts(err.message || "Error fetching products");
      } finally {
        setLoadingAllProducts(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      setErrorCategories(null);
      try {
        const response = await axios.get(
          "https://ecommerce-shop-qg3y.onrender.com/api/category/displayAllCategory"
        );
        if (response.data?.data && Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        }
      } catch (err) {
        setErrorCategories(err.message || "Error fetching categories");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Nevbar />

      <div className="relative w-full">
        <img src={img1} alt="" className="w-full h-auto lg:h-full md:h-110 object-cover" />
        <img
          src={img}
          alt=""
          className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-3/6 md:w-1/2 lg:w-1/3"
        />
      </div>

      <div className="mx-auto flex flex-col md:flex-row justify-around md:bottom-35 bottom-10 relative items-center gap-8">
        <Link to="/Products" className="!no-underline">
          <button className="flex items-center opacity-70 rounded-full overflow-hidden shadow-lg">
            <span className="bg-[#E6D49D] text-[#5C4B2C] md:h-auto h-8 md:w-51 item-center rounded-full flex font-bold">
              <span className="bg-[#5C4B2C] text-[#d2be87] p-2 flex rounded-l-full text-2xl font-black items-center justify-center">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <p className="item-center flex justify-center m-0 pt-1 md:ps-4 p-2 md:text-xl">
                Order Now
              </p>
            </span>
          </button>
        </Link>

        <div className="text-center opacity-70 md:text-right md:-bottom-7 lg:-bottom-4 md:flex hidden relative flex-col items-center md:items-end">
          <p className="font-semibold mb-2 md:justify-end flex text-[#e5d89a]">Follow Us Now</p>
          <div className="flex justify-center md:justify-end text-2xl gap-2 mb-1 text-[#FFF6DC]">
            <i className="fa-brands fa-facebook"></i>
            <ion-icon name="logo-youtube"></ion-icon>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <p className="font-semibold mb-1 text-[#d2be87]">Call Us : 658-7854-9634</p>
          <p className="text-sm text-[#FFF6DC] flex justify-start">Typeyourwebsitehere</p>
        </div>
      </div>

      <div className="bg-white text-center px-4 sm:px-6 lg:px-20 py-10">
        <p className="text-sm sm:text-base lg:text-xl text-red-500 font-semibold uppercase mb-2">
          Customer Favorites
        </p>
        <Link to="/Category" className="!no-underline">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
            Popular Categories
          </p>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {loadingCategories ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg">
                <div className="bg-yellow-50 rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-16 sm:h-16 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded mt-4 w-3/4 mx-auto animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded mt-2 w-1/2 mx-auto animate-pulse"></div>
              </div>
            ))
          ) : errorCategories ? (
            <div className="col-span-5 text-red-500 flex justify-center py-10">
              {errorCategories}
            </div>
          ) : categories.length > 0 ? (
            <>
              {categories.slice(0, 4).map((category) => (
                <div key={category._id} className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg">
                  <div className="bg-yellow-50 rounded-full  w-24 h-24 mx-auto flex items-center justify-center">
                    <Link to="/Category">
                      <img 
                        src={category.category_photo} 
                        alt={category.category_name} 
                        className=" h-20 sm:w-16 sm:h-16 object-contain"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = pngwing7; // Fallback image
                        }}
                      />
                    </Link>
                  </div>
                  <h3 className="font-bold text-gray-900 mt-4 text-base sm:text-lg md:text-xl">
                    {category.category_name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 font-medium">
                    {/* You can add product count here if available */}
                  </p>
                </div>
              ))}
              {/* Keep the Browse All card at the end */}
              <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg">
                <div className="bg-yellow-50 rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
                  <Link to="Category">
                    <img src={pngwing7} alt="Browse All" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                  </Link>
                </div>
                <h3 className="font-bold text-gray-900 mt-4 text-base sm:text-lg md:text-xl">Browse All</h3>
                <p className="text-sm sm:text-base text-gray-500 font-medium">(All Items)</p>
              </div>
            </>
          ) : (
            <div className="col-span-5 text-gray-500 flex justify-center py-10">
              No categories available
            </div>
          )}
        </div>

        <section className="bg-white py-16 px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between ms-0 mb-10 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Daily Best Sells</h2>
            <div className="flex gap-4 text-sm font-semibold">
              <button className="text-green-600 border-b-2 border-green-500">Featured</button>
              <button className="text-gray-600 hover:text-green-600">Popular</button>
              <button className="text-gray-600 hover:text-green-600">New added</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-5 max-w-8xl mx-auto">
            <div className="col-span-1 lg:col-span">
              <div className="h-full rounded-xl overflow-hidden bg-cover bg-center flex flex-col justify-between text-white p-6" style={{ backgroundImage: `url(${banner})` }}>
                <h3 className="text-4xl font-[Quicksand] font-bold px-2">Bring nature into your home</h3>
                <Link to="/Products" className="!no-underline">
                  <button className="bg-red-500 hover:bg-red-600 flex bottom-30 relative text-white text-sm font-semibold px-3 pt-2 pb-0 h-10 gap-2 rounded w-max">
                    Shop Now
                    <p className="mt-1 !no-underline">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </p>
                  </button>
                </Link>
              </div>
            </div>

            {loadingAllProducts ? (
              <div className="col-span-4 flex items-center justify-center min-h-[200px]">
                Loading products...
              </div>
            ) : errorAllProducts ? (
              <div className="col-span-4 text-red-500 flex items-center justify-center min-h-[200px]">
                {errorAllProducts}
              </div>
            ) : allProducts.length > 0 ? (
              allProducts.slice(0, 4).map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-xl px-3 pb-3 relative shadow hover:shadow-lg transition"
                >
                  <span className="absolute -ms-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-tl-lg rounded-br-lg">
                    {product.brand}
                  </span>
                  <img
                    src={product.product_images?.[0] || banner1}
                    alt={product.name}
                    className="h-32 mx-auto object-contain my-5"
                  />
                  <p className="text-gray-500 !text-sm">{product.brand}</p>
                  <h3 className="font-bold !text-base pe-1 text-gray-800 h-10">
                    {product.name}
                  </h3>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="text-yellow-400 text-lg">★</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-green-600 font-bold text-lg">
                      ₹{product.price}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                    <div className="h-full bg-red-500 w-[75%]"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Stock: {product.stock}</p>
                  <Link to={`/product/${product._id}`} className="!no-underline">
                    <button className="bg-red-500 hover:bg-red-600 w-full text-white text-sm py-2 rounded mt-2">
                      View Details
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-4 text-gray-500 flex items-center justify-center min-h-[200px]">
                No products available
              </div>
            )}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-sm font-semibold text-red-400 uppercase">Special Dishes</p>
          <div className="flex justify-between">
            <p className="md:text-4xl lg:text-6xl font-bold mt-2 mb-8 lg:w-140 w-90 leading-tight">
              Standout Dishes From Our Menu
            </p>
            <div className="flex gap-2" style={{ alignItems: "center" }}>
              <button className="bg-gray-200 text-gray-700 lg:p-3 md:p-2 p-1 md:w-12 md:h-12 text-3xl w-10 h-10 flex items-center justify-center !rounded-full hover:bg-gray-300">
                <ion-icon name="chevron-back-outline"></ion-icon>
              </button>
              <button className="bg-red-500 text-white lg:p-3 md:p-2 p-1 text-3xl md:w-12 md:h-12 w-10 h-10 flex items-center justify-center !rounded-full hover:bg-red-600">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-bl-xl">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  alt="Fattoush salad"
                  className="w-40 h-40 object-cover rounded-full mx-auto"
                  src={salad1}
                />
                <h3 className="text-lg font-semibold text-center mt-4">Fattoush salad</h3>
                <p className="text-gray-500 text-center text-sm mt-1">Description of the item</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-bl-xl">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  alt="Vegetable salad"
                  className="w-40 h-40 object-cover rounded-full mx-auto"
                  src={salad2}
                />
                <h3 className="text-lg font-semibold text-center mt-4">Vegetable salad</h3>
                <p className="text-gray-500 text-center text-sm mt-1">Description of the item</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-bl-xl">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  alt="Egg vegi salad"
                  className="w-40 h-40 object-cover rounded-full mx-auto"
                  src={salad3}
                />
                <h3 className="text-lg font-semibold text-center mt-4">Egg vegi salad</h3>
                <p className="text-gray-500 text-center text-sm mt-1">Description of the item</p>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Deals Of The Day</h2>
            <Link to="/Products" className="text-sm text-gray-500 hover:text-gray-700 flex !no-underline items-center gap-1">
              All Deals <span className="text-sm mt-1"><ion-icon name="arrow-forward-outline"></ion-icon></span>
            </Link>
          </div>

          {loadingAllProducts ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Loading skeleton */}
                </div>
              ))}
            </div>
          ) : errorAllProducts ? (
            <div className="text-red-500 text-center py-10">
              {errorAllProducts}
            </div>
          ) : allProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {allProducts.slice(0, 4).map((product) => (
                <div key={product._id} className="flex flex-col items-center">
                  <div className="bg-white rounded-2xl w-70 overflow-hidden shadow-sm">
                    <img 
                      src={product.product_images?.[0] || banner5} 
                      alt={product.name} 
                      className="w-full h-60 object-fill"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = banner5; // Fallback image
                      }}
                    />
                  </div>
                  <div className="p-4 bg-white -top-13 relative rounded-2xl w-62 overflow-hidden shadow-sm">
                    <h3 className="!text-base font-semibold mb-1 font-[Quicksand] line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex item-center text-sm text-gray-500 mb-1">
                      <span className="text-yellow-400 mr-1">★</span> 
                      {product.rating ? `(${product.rating})` : '(4.0)'}
                    </div>
                    <p className="text-sm text-green-500 mb-1">By {product.brand || 'NestFood'}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <span className="text-green-600 font-semibold text-lg">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through ml-2 text-sm">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      
                      </div>
                      <Link to={`/product/${product._id}`} className="!no-underline">
                        <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-md flex items-center gap-1">
                          <ion-icon name="cart-outline"></ion-icon> View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-center py-10">
              No products available
            </div>
          )}
        </section>

        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-0 pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src={image28}
                alt="Salad Dish"
                className="rounded-2xl shadow-md w-full max-w-md md:max-w-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Nunito] font-bold mb-10">
                Why People Choose Us?
              </h2>
              <div className="flex items-start gap-4 mb-6 p-4 bg-white mt-4 rounded-xl shadow hover:shadow-md transition">
                <div className="bg-yellow-100 p-3 rounded-full flex items-center justify-center">
                  <img src={icon01} alt="" className="w-15 sm:w-15" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-1">
                    Convenient and Reliable
                  </h4>
                  <p className="text-sm text-gray-600 font-[Nunito] font-medium">
                    Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <div className="bg-yellow-100 p-3 rounded-full flex items-center justify-center">
                  <img src={icon02} alt="" className="w-15 sm:w-15" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-1">
                    Variety of Options
                  </h4>
                  <p className="text-sm text-gray-600 font-[Nunito] font-medium">
                    From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <div className="bg-yellow-100 p-3 rounded-full flex items-center justify-center">
                  <img src={icon03} alt="" className="w-15 sm:w-15" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-1">
                    Eat Burger
                  </h4>
                  <p className="text-sm text-gray-600 font-[Nunito] font-medium">
                    Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="bg-gradient-to-r from-[#6b5d3e] to-black rounded-3xl lg:p-0 lg:ps-10 p-10 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
            <div className="text-white lg:w-1/2 z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Stay home & get your daily<br /> needs from our shop
              </h1>
              <p className="text-gray-300 mb-6">
                Start You'r Daily Shopping with
                <span className="text-green-400 font-semibold">Nest Mart</span>
              </p>
              <div className="bg-white rounded-full overflow-hidden flex items-center max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 w-full text-gray-800 outline-none rounded-l-full"
                />
                <button className="bg-orange-400 hover:bg-orange-500 text-white me-4 rounded-full px-6 py-3 font-semibold transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 z-10 relative flex justify-center">
              <img
                src={fotter}
                alt="Delivery Man"
                className="lg:flex lg:max-w-full hidden relative z-10"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-0 px-4 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
              <img src={offers} alt="Offer Icon" className="h-10 w-10" />
              <div>
                <h4 className="font-semibold text-lg">Best prices & offers</h4>
                <p className="text-sm text-gray-500">Orders $50 or more</p>
              </div>
            </div>
            <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
              <img src={offers1} alt="Free Delivery" className="h-10 w-10" />
              <div>
                <h4 className="font-semibold text-lg">Free delivery</h4>
                <p className="text-sm text-gray-500">24/7 amazing services</p>
              </div>
            </div>
            <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
              <img src={offers2} alt="Daily Deal" className="h-10 w-10" />
              <div>
                <h4 className="font-semibold text-lg">Great daily deal</h4>
                <p className="text-sm text-gray-500">When you sign up</p>
              </div>
            </div>
            <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
              <img src={offers3} alt="Wide Assortment" className="h-10 w-10" />
              <div>
                <h4 className="font-semibold text-lg">Wide assortment</h4>
                <p className="text-sm text-gray-500">Mega Discounts</p>
              </div>
            </div>
            <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
              <img src={offers4} alt="Easy Returns" className="h-10 w-10" />
              <div>
                <h4 className="font-semibold text-lg">Easy returns</h4>
                <p className="text-sm text-gray-500">Within 30 days</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Home;