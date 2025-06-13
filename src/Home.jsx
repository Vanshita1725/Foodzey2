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
import banner2 from "./assets/product-3-1.png";
import banner3 from "./assets/product-4-1.png";
import banner4 from "./assets/product-5-1.png";
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


    return (
        <div>
            <Nevbar />


            <img src={img1} alt="" className=" w-full lg:h-full md:h-110" />
            <img src={img} alt="" className="absolute lg:top-1/2 md:top-50 left-1/3 top-1/2 w-50 -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-1/2" />
            <div className=" mx-auto flex flex-col md:flex-row justify-around md:bottom-35 bottom-10  relative items-center gap-8">


                <button className="flex items-center opacity-70  rounded-full overflow-hidden shadow-lg">

                    <span className="bg-[#E6D49D] text-[#5C4B2C] md:h-auto h-8 md:w-51  item-center rounded-full flex font-bold">
                        <span className="bg-[#5C4B2C] text-[#d2be87] p-2 flex rounded-l-full text-2xl font-black items-center justify-center">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                        <p className="item-center flex justify-center m-0 pt-1 md:ps-4 p-2 md:text-xl">Order Now
                        </p>
                    </span>
                </button>


                <div className="text-center opacity-70 md:text-right md:-bottom-7  lg:-bottom-4 md:flex hidden relative flex flex-col items-center md:items-end">
                    <p className="font-semibold mb-2 md:justify-end flex text-[#e5d89a]">Follow Us Now</p>
                    <div className="flex justify-center md:justify-end text-2xl gap-2 mb-1 text-[#FFF6DC]">
                        <i className="fa-brands fa-facebook"></i>
                        <ion-icon name="logo-youtube"></ion-icon>
                        <i className="fa-brands fa-square-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <p className="font-semibold mb-1 text-[#d2be87]">Call Us : 658-7854-9634</p>
                    <p className="text-sm  text-[#FFF6DC] flex justify-start">Typeyourwebsitehere</p>
                </div>


            </div>
           <div className="bg-white text-center px-4 sm:px-6 lg:px-20 py-10">
  <p className="text-sm sm:text-base lg:text-xl text-red-500 font-semibold uppercase mb-2">
    Customer Favorites
  </p>
  <p className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-10">
    Popular Categories
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
    {/* Card Start */}
    <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg">
      <div className="bg-yellow-50 rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
        <img src={pngwing4} alt="Main Dish" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
      </div>
      <h3 className="font-bold text-gray-900 mt-4 text-base sm:text-lg md:text-xl">Main Dish</h3>
      <p className="text-sm sm:text-base text-gray-500 font-medium">(86 dishes)</p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg">
      <div className="bg-yellow-50 rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
        <img src={pngwing6} alt="Break Fast" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
      </div>
      <h3 className="font-bold text-gray-900 mt-4 text-base sm:text-lg md:text-xl">Break Fast</h3>
      <p className="text-sm sm:text-base text-gray-500 font-medium">(12 break fast)</p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg">
      <div className="bg-yellow-50 rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
        <img src={pngwing3} alt="Dessert" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
      </div>
      <h3 className="font-bold text-gray-900 mt-4 text-base sm:text-lg md:text-xl">Dessert</h3>
      <p className="text-sm sm:text-base text-gray-500 font-medium">(48 dessert)</p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg">
      <div className="bg-yellow-50 rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
        <img src={pngwing7} alt="Browse All" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
      </div>
      <h3 className="font-bold text-gray-900 mt-4 text-base sm:text-lg md:text-xl">Browse All</h3>
      <p className="text-sm sm:text-base text-gray-500 font-medium">(255 Items)</p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg">
      <div className="bg-yellow-50 rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
        <img src={frame45} alt="Breakfast Food" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
      </div>
      <h3 className="font-bold text-gray-900 mt-4 text-base sm:text-lg md:text-xl">Breakfast Food</h3>
      <p className="text-sm sm:text-base text-gray-500 font-medium">(205 Items)</p>
    </div>
    {/* Card End */}
  </div>
</div>

            <section className="bg-white py-16 px-16">
                {/* <!-- Section Title and Tabs --> */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between ms-0 mb-10 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Daily Best Sells</h2>
                    <div className="flex gap-4 text-sm font-semibold">
                        <button className="text-green-600 border-b-2 border-green-500">Featured</button>
                        <button className="text-gray-600 hover:text-green-600">Popular</button>
                        <button className="text-gray-600 hover:text-green-600">New added</button>
                    </div>
                </div>

                {/* <!-- Products Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-5  max-w-8xl mx-auto">
                    {/* <!-- Left Side Banner --> */}
                    <div className="col-span-1 lg:col-span ">
                        <div className="h-full rounded-xl overflow-hidden  bg-cover bg-center flex flex-col justify-between text-white p-6" style={{ backgroundImage: `url(${banner})` }}>
                            <h3 className="!text-4xl font-[Quicksand] font-bold px-2">Bring nature into your home</h3>

                            <button className="bg-red-500 hover:bg-red-600 flex bottom-30 relative text-white  text-sm font-semibold px-3 pt-2 pb-0 h-10 gap-2 rounded  w-max"> Shop Now
                                <p className="mt-1"> <ion-icon name="arrow-forward-outline"></ion-icon></p>
                            </button>

                        </div>
                    </div>

                    {/* <!-- Product Card 1 --> */}

                    <div className="bg-white rounded-xl px-3  pb-3  relative shadow hover:shadow-lg transition">
                        <span className="absolute -ms-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-tl-lg  rounded-br-lg">Save 35%</span>
                        <img src={banner1} alt="Product" className="h-32 mx-auto object-contain my-2" />
                        <p className="text-gray-500 text-sm">Hodo Foods</p>
                        <h3 className="!font-bold !text-base pe-1 text-gray-800 mt-1">All Natural Italian-Style Chicken Meatballs</h3>
                        <div className="flex items-center mt-2 text-sm">
                            <span className="text-yellow-400 text-lg">★</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="text-green-600 font-bold text-lg">$238.85</span>
                            <span className="line-through text-gray-400">$245.8</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                            <div className="h-full bg-red-500 w-[75%]"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Sold: 90/120</p>
                        <button className=" bg-red-500 hover:bg-red-600 w-full text-white text-sm  py-2 rounded">
                            Add To Cart
                        </button>
                    </div>

                    {/* <!-- Product Card 2 --> */}
                    <div className="bg-white rounded-xl px-3 pb-3 relative shadow hover:shadow-lg transition">
                        <span className="absolute -ms-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1  rounded-tl-lg  rounded-br-lg">Sale</span>
                        <img src={banner2} alt="Product" className="h-32 mx-auto object-contain my-2" />
                        <p className="text-gray-500 text-sm">Hodo Foods</p>
                        <h3 className="!font-bold !text-base pe-3 text-gray-800 mt-1">Angie’s Boomchickapop Sweet and womnies</h3>
                        <div className="flex items-center mt-2 text-sm">
                            <span className="text-yellow-400 text-lg">★</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="text-green-600 font-bold text-lg">$238.85</span>
                            <span className="line-through text-gray-400">$245.8</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                            <div className="h-full bg-red-500 w-[75%]"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Sold: 90/120</p>
                        <button className=" bg-red-500 hover:bg-red-600 w-full text-white text-sm  py-2 rounded">
                            Add To Cart
                        </button>
                    </div>

                    {/* <!-- Product Card 3 --> */}
                    <div className="bg-white rounded-xl pb-3 px-3 relative shadow hover:shadow-lg transition">
                        <span className="absolute -ms-4 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1  rounded-tl-lg  rounded-br-lg">Best sale</span>
                        <img src={banner3} alt="Product" className="h-32 mx-auto object-contain my-2" />
                        <p className="text-gray-500 text-sm">Hodo Foods</p>
                        <h3 className="!font-bold !text-base pe-4 text-gray-800 mt-1">Foster Farms Takeout Crispy Classic</h3>
                        <div className="flex items-center mt-2 text-sm">
                            <span className="text-yellow-400 text-lg">★</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="text-green-600 font-bold text-lg">$238.85</span>
                            <span className="line-through text-gray-400">$245.8</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                            <div className="h-full bg-red-500 w-[75%]"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Sold: 90/120</p>
                        <button className=" bg-red-500 hover:bg-red-600 w-full text-white text-sm  py-2 rounded">
                            Add To Cart
                        </button>
                    </div>

                    {/* <!-- Product Card 4 --> */}
                    <div className="bg-white rounded-xl   pb-3 px-3 relative shadow hover:shadow-lg pt-0 transition">
                        <span className=" absolute -ms-4 bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1  rounded-tl-lg  rounded-br-lg">Save 15%</span>
                        <img src={banner4} alt="Product" className="h-32 mx-auto object-contain my-2" />
                        <p className="text-gray-500 text-sm">Hodo Foods</p>
                        <h3 className="!font-bold !text-base pe-1 text-gray-800 mt-1">Blue Diamond Almonds Lightly Salted</h3>
                        <div className="flex items-center mt-2 text-sm">
                            <span className="text-yellow-400 text-lg">★</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="text-green-600 font-bold text-lg">$238.85</span>
                            <span className="line-through text-gray-400">$245.8</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                            <div className="h-full bg-red-500 w-[75%]"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Sold: 90/120</p>
                        <button className=" bg-red-500 hover:bg-red-600 w-full text-white text-sm  py-2 rounded">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </section>
            <div className="max-w-7xl mx-auto  px-4 py-12">
                <p className="text-sm font-semibold text-red-400 uppercase">Special Dishes</p>
                <div className="flex justify-between">
                    <p className="md:text-4xl lg:text-6xl font-bold mt-2 mb-8 lg:w-140 w-90 leading-tight">Standout Dishes From Our Menu</p>
                    <div className="flex gap-2" style={{ alignItems: "center" }} >
                        <button className="bg-gray-200 text-gray-700 lg:p-3 md:p-2 p-1 md:w-12 md:h-12 !text-3xl lg:w-16 lg:h-16 w-10 h-10  !rounded-full hover:bg-gray-300 ">
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </button>
                        <button className="bg-red-500 text-white lg:p-3 md:p-2 p-1 !text-3xl lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 !rounded-full hover:bg-red-600">
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md relative">
                            <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-bl-xl">
                                <ion-icon role="img" className="md hydrated" name="heart-outline">
                                </ion-icon>
                            </div>
                            <img alt="Fattoush salad" className="w-40 h-40 object-cover rounded-full mx-auto" src={salad1}></img>
                            <h3 className="text-lg font-semibold text-center mt-4">Fattoush salad</h3>
                            <p className="text-gray-500 text-center text-sm mt-1">Description of the item</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md relative">
                            <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-bl-xl">
                                <ion-icon role="img" className="md hydrated" name="heart-outline">
                                </ion-icon>
                            </div>
                            <img alt="Vegetable salad" className="w-40 h-40 object-cover rounded-full mx-auto" src={salad2}></img>
                            <h3 className="text-lg font-semibold text-center mt-4">Vegetable salad</h3>
                            <p className="text-gray-500 text-center text-sm mt-1">Description of the item</p>
                        </div><div className="bg-white p-6 rounded-2xl shadow-md relative">
                            <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-bl-xl">
                                <ion-icon role="img" className="md hydrated" name="heart-outline"></ion-icon>
                            </div>
                            <img alt="Egg vegi salad" className="w-40 h-40 object-cover rounded-full mx-auto" src={salad3}></img>
                            <h3 className="text-lg font-semibold text-center mt-4">Egg vegi salad</h3>
                            <p className="text-gray-500 text-center text-sm mt-1">Description of the item</p>
                        </div>
                    </div>
                </div>
                <section className="max-w-7xl mx-auto px-4 py-10">
                    {/* <!-- Header --> */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold">Deals Of The Day</h2>
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                            All Deals <span className="text-lg">&rarr;</span>
                        </a>
                    </div>

                    {/* <!-- Product Cards --> */}
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* <!-- Card 1 --> */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-2xl w-70 overflow-hidden shadow-sm">
                                <img src={banner5} alt="Product" className="w-full h-55 object-cover" />
                            </div>
                            <div className="p-4 bg-white -top-13 relative rounded-2xl w-62 overflow-hidden shadow-sm">
                                <h3 className="!text-base font-semibold mb-1 font-[Quicksand]">Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>
                                <div className="flex item-center text-sm text-gray-500 mb-1">
                                    <span className="text-yellow-400 mr-1">★</span> (4.0)
                                </div>
                                <p className="text-sm text-green-500 mb-1">By NestFood</p>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <span className="text-green-600 font-semibold text-lg">$32.85</span>
                                        <span className="text-gray-400 line-through ml-2 text-sm">$33.8</span>
                                    </div>
                                    <button className="bg-red-500 text-white text-sm px-3 py-2 !rounded-md flex items-center gap-1">
                                        <ion-icon name="cart-outline"></ion-icon> Add
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-2xl w-70 overflow-hidden shadow-sm">

                                <img src={banner6} alt="Product" className="w-full h-55 object-cover" />
                            </div>
                            <div className="p-4 bg-white w-62 -top-13 relative rounded-2xl overflow-hidden shadow-sm">
                                <h3 className="!text-base font-semibold mb-1 font-[Quicksand]">Perdue Simply Smart Organics Gluten Free</h3>
                                <div className="flex item-center text-sm text-gray-500 mb-1">
                                    <span className="text-yellow-400 mr-1">★</span> (4.0)
                                </div>
                                <p className="text-sm text-green-500 mb-1">By Old El Paso</p>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <span className="text-green-600 font-semibold text-lg">$24.85</span>
                                        <span className="text-gray-400 line-through ml-2 text-sm">$26.8</span>
                                    </div>
                                    <button className="bg-red-500 text-white text-sm px-3 py-2 !rounded-md flex items-center gap-1">
                                        <ion-icon name="cart-outline"></ion-icon> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 
                        <!-- Card 3 --> */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-2xl w-70 overflow-hidden shadow-sm">
                                <img src={banner7} alt="Product" className="w-full h-55 object-cover" />
                            </div>
                            <div className="p-4 bg-white w-62 -top-13 relative rounded-2xl overflow-hidden shadow-sm ">
                                <h3 className="!text-base font-semibold mb-1 font-[Quicksand]">Signature Wood-Fired Mushroom and Caramelized</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-1">
                                    <span className="text-yellow-400 mr-1">★</span> (3.0)
                                </div>
                                <p className="text-sm text-green-500 mb-1">By Progresso</p>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <span className="text-green-600 font-semibold text-lg">$12.85</span>
                                        <span className="text-gray-400 line-through ml-2 text-sm">$13.8</span>
                                    </div>
                                    <button className="bg-red-500 text-white text-sm px-3 py-2 !rounded-md flex items-center gap-1">
                                        <ion-icon name="cart-outline"></ion-icon> Add
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-2xl w-70 overflow-hidden shadow-sm">
                                <img src={banner8} alt="Product" className="w-full h-55 object-cover" />
                            </div>
                            <div className="p-4 bg-white w-62 -top-13 relative rounded-2xl overflow-hidden shadow-sm">
                                <h3 className="!text-base font-semibold mb-1 font-[Quicksand]">Simply Lemonade with Raspberry Juice</h3>
                                <div className="flex item-center text-sm text-gray-500 mb-1">
                                    <span className="text-yellow-400 mr-1">★</span> (3.0)
                                </div>
                                <p className="text-sm text-green-500 mb-1">By Yoplait</p>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <span className="text-green-600 font-semibold !text-lg">$15.85</span>
                                        <span className="text-gray-400 line-through ml-2 text-sm ">$16.8</span>
                                    </div>
                                    <button className="bg-red-500 text-white text-sm px-3 py-2 !rounded-md flex items-center gap-1">
                                        <ion-icon name="cart-outline"></ion-icon> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-16 pt-0 px-8">
                    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1  lg:grid-cols-2 gap-10 lg:items-start md:items-center">

                        {/* <!-- Left Image --> */}
                        <div>
                            <img src={image28} alt="Salad Dish" className="rounded-2xl md:h-110 shadow-md md:w-120" />
                        </div>

                        {/* <!-- Right Content --> */}
                        <div>
                            <h2 className="!text-5xl font-[Nunito] font-bold mb-8">Why People Choose us?</h2>

                            {/* <!-- Feature 1 --> */}
                            <div className="flex items-start space-x-4 mb-6 p-4 pb-0 pe-5 lg:w-120 bg-white rounded-xl shadow hover:shadow-md transition">
                                <div className="bg-yellow-100 text-yellow-500 rounded-full p-3">
                                    <img src={icon01} alt="" />
                                </div>
                                <div>
                                    <h4 className="!text-3xl font-semibold">Convenient and Reliable</h4>
                                    <p className="text-sm font-bold font-[Nunito] text-gray-600">Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.</p>
                                </div>
                            </div>

                            {/* <!-- Feature 2 --> */}
                            <div className="flex items-start space-x-4 mb-6 p-4 pb-0 pe-5 lg:w-120 bg-white rounded-xl shadow hover:shadow-md transition">
                                <div className="bg-yellow-100 text-yellow-500 rounded-full p-3">
                                    <img src={icon02} alt="" />
                                </div>
                                <div>
                                    <h4 className="!text-3xl font-semibold">Variety of Options</h4>
                                    <p className="text-sm font-bold font-[Nunito] text-gray-600">From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.</p>
                                </div>
                            </div>

                            {/* <!-- Feature 3 --> */}
                            <div className="flex items-start space-x-4 p-4 pb-0 pe-5 lg:w-120 bg-white rounded-xl shadow hover:shadow-md transition">
                                <div className="bg-yellow-100 text-yellow-500 rounded-full p-3">
                                    <img src={icon03} alt="" />
                                </div>
                                <div>
                                    <h4 className="!text-3xl font-semibold">Eat Burger</h4>
                                    <p className="text-sm font-bold font-[Nunito] text-gray-600">Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-10">
                    <div className="bg-gradient-to-r from-[#6b5d3e] to-black rounded-3xl lg:p-0 lg:ps-10 p-10 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">

                        {/* <!-- Left content --> */}
                        <div className="text-white lg:w-1/2 z-10">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">Stay home & get your daily<br /> needs from our shop</h1>
                            <p className="text-gray-300 mb-6">Start You'r Daily Shopping with 
                                <span className="text-green-400 font-semibold">Nest Mart</span></p>

                            {/* <!-- Email input --> */}
                            <div className="bg-white rounded-full overflow-hidden flex items-center max-w-md">
                                <input type="email" placeholder="Your email address" className="px-4 py-3 w-full text-gray-800 outline-none rounded-l-full" />
                                <button className="bg-orange-400 hover:bg-orange-500 text-white me-4 !rounded-full px-6 py-3 font-semibold  transition-all">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* <!-- Right image --> */}
                        <div className="lg:w-1/2 mt-10 lg:mt-0 z-10 relative flex justify-center">
                            <img src={fotter} alt="Delivery Man" className="lg:flex lg:max-w-full hidden relative z-10" />
                            {/* <!-- Floating veggies (optional) --> */}
                            <img src="/path/to/veggies.png" alt="Veggies" className="absolute top-0 right-10 w-[200px] hidden md:block" />
                        </div>
                    </div>
                </section>

                {/* <!-- Feature Cards --> */}
                <section className="max-w-7xl mx-auto px-4 pb-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">

                        {/* <!-- Feature --> */}
                        <div className="bg-gray-50 p-2 h-20 flex rounded-lg shadow text-center">
                            <img src={offers} className="mx-auto h-10 my-2" />
                            <div>                           
                            <h4 className="font-semibold !text-lg">Best prices & offers</h4>
                            <p className="text-sm text-gray-500">Orders $50 or more</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-2 h-20 flex rounded-lg shadow text-center">
                            <img src={offers1}  className="mx-auto h-10 my-2" />
                            <div>
                            <h4 className="font-semibold !text-lg">Free delivery</h4>
                            <p className="text-sm text-gray-500">24/7 amazing services</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-2 h-20 flex rounded-lg shadow text-center">
                            <img src={offers2} className="mx-auto h-10 my-2" />
                            <div>
                            <h4 className="font-semibold !text-lg">Great daily deal</h4>
                            <p className="text-sm text-gray-500">When you sign up</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-2 h-20 flex rounded-lg shadow text-center">
                            <img src={offers3} className="mx-auto h-10 my-2" />
                            <div>
                            <h4 className="font-semibold !text-lg">Wide assortment</h4>
                            <p className="text-sm text-gray-500">Mega Discounts</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-2 flex h-20 rounded-lg shadow text-center">
                            <img src={offers4} className="mx-auto h-10 my-2" />
                            
                           <div>
                            <h4 className="font-semibold !text-lg">Easy returns</h4>
                            <p className="text-sm text-gray-500">Within 30 days</p>
                            </div>
                            
                        </div>
                    </div>
                </section>



                <script src="https://kit.fontawesome.com/a076d05399.js" ></script>
            </div>
          
           
           <Footer />
        </div>


    )
}

export default Home;