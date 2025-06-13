import Nevbar from "./Nevbar";
import Footer from "../Componenets/Fotter";
import letter from "../assets/banner-13.png.png";
import letter1 from "../assets/__after.png";
import letter2 from "../assets/__before.png";
import banner1 from "../assets/banner-1.png.png";
import banner2 from "../assets/banner-2.png.png";
import banner3 from "../assets/banner-3.png.png";

function Home2() {
    return (
        <div >
            <Nevbar />
            {/* <!-- Decorative Images --> */}
            <img src="top-left.png" alt="" className="absolute top-0 left-0 w-16 md:w-24" />
            <img src="top-right.png" alt="" className="absolute top-0 right-0 w-16 md:w-24" />
            <img src="bottom-left.png" alt="" className="absolute bottom-0 left-0 w-16 md:w-20" />
            <img src={letter2} alt="" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 md:w-16" />
            <img src={letter1} alt="" className="absolute bottom-0 right-0  w-24 md:w-32" />

            <section className=" mx-0 !bg-gray-100 ps-5 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

                {/* <!-- Left Text Column --> */}
                <div>
                    <p className="text-sm font-bold text-red-600">
                        <span className="text-black font-semibold">100%</span> Organic Vegetables
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight text-black">
                        The best way to <br />stuff your wallet.
                    </h1>
                    <p className="text-gray-500 mt-5 max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                    </p>

                    {/* <!-- Email Subscribe --> */}
                    <form className="mt-8 flex items-center max-w-md bg-white ps-4 h-15 rounded-full shadow">
                        <span className="text-gray-400 text-xl mr-2">✉️</span>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                        <button type="submit" className="bg-green-500 h-15 text-white text-sm px-6 py-2 !rounded-full ml-2 hover:bg-green-600 transition">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* <!-- Right Tag & Image Column --> */}
                <div className="flex flex-col items-center m lg:items-end">
                    {/* <!-- Tags --> */}
                    <div className="flex flex-wrap justify-center relative lg:right-50 lg:justify-end gap-3 mb-10">
                        <span className="bg-white px-4 py-2 rounded-full shadow text-sm text-green-600 flex items-center gap-1">
                            <span className="text-gray-400 mt-1 text-sm"><ion-icon name="close-outline"></ion-icon></span> Shopping
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full shadow text-sm text-green-600 flex items-center gap-1">
                            <span className="text-gray-400 mt-1 text-sm"><ion-icon name="close-outline"></ion-icon></span> Recips
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full shadow text-sm text-green-600 flex items-center gap-1">
                            <span className="text-gray-400 mt-1 text-sm"><ion-icon name="close-outline"></ion-icon></span> Kitchen
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full shadow text-sm text-green-600 flex items-center gap-1">
                            <span className="text-gray-400 mt-1 text-sm"><ion-icon name="close-outline"></ion-icon></span> News
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full shadow text-sm text-green-600 flex items-center gap-1">
                            <span className="text-gray-400 mt-1 text-sm"><ion-icon name="close-outline"></ion-icon></span> Food
                        </span>
                    </div>

                    {/* <!-- Lettuce Image --> */}
                    <img src={letter} alt="Lettuce" className="w-64 md:w-130 flex relative lg:-bottom-25" />
                </div>
            </section>

            <div className="p-4 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1 */}
                <div>
                    <img src={banner1} alt="Fresh Products" className="w-full mb-4 rounded-lg shadow  flex flex-col items-center text-center w-full" />
                    <div className="absolute -top-55 px-3">
                        <h2 className="!text-2xl md:text-xl w-55 font-semibold text-gray-800 mb-3">
                            Everyday Fresh & Clean with Our Products
                        </h2>
                        <button className="bg-red-500 text-white text-sm px-2 py-2 lg:w-40  w-30 rounded hover:bg-red-600 transition">
                            Shop Now →
                        </button>
                    </div>
                </div>


                {/* Card 2 */}
                <div>
                    <img src={banner2} alt="Fresh Products" className="w-full mb-4 rounded-lg shadow flex flex-col items-center text-center w-full" />
                    <div className="relative -top-55 px-3">
                        <h2 className="!text-2xl md:text-xl  w-55  font-semibold text-gray-800 mb-3">
                            Everyday Fresh & Clean with Our Products
                        </h2>
                        <button className="bg-red-500 text-white text-sm px-2 py-2 lg:w-40  w-30 rounded hover:bg-red-600 transition">
                            Shop Now →
                        </button>
                    </div>
                </div>


                {/* Card 3 */}
                <div>
                    <img src={banner3} alt="Fresh Products" className="w-full mb-4 rounded-lg shadow  flex flex-col items-center text-center w-full" />
                    <div className="relative -top-55 px-3">
                        <h2 className="!text-2xl md:text-xl  w-55  font-semibold text-gray-800 mb-3">
                            Everyday Fresh & Clean with Our Products
                        </h2>
                        <button className="bg-red-500 text-white text-sm px-2 py-2 lg:w-40  w-30 rounded hover:bg-red-600 transition">
                            Shop Now →
                        </button>
                    </div>
                </div>


            </div>



            <Footer />
        </div>
    )
}
export default Home2;