import Footer from "./Componenets/Fotter";
import Nevbar from "./Componenets/Nevbar";
import bg from "./assets/1.jpg.jpg";
import display181 from "./assets/181.png";
import display182 from "./assets/182.png";
import display183 from "./assets/183.png";
import display184 from "./assets/184.png";
import display185 from "./assets/185.png";
import display186 from "./assets/→ 6.jpg.png"
import banner2 from "./assets/2.jpg.png";
import { Link } from "react-router";


function Blog() {
    return (
        <div>
            <Nevbar />
            <div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center ">
                <p className="m-0">Blog</p>
                <p className="m-0">Home-Product</p>
            </div>
            <div className="items-center flex flex-col justify-center">
                <div className="md:flex  mx-auto mt-20 lg:max-w-6xl  justify-center gap-6 ">
                    <div>
                        <img src={bg} alt="Background" className=" h-96 w-210 rounded-lg object-cover" />
                        <section className="px-4 py-10 max-w-7xl mx-auto">
                            {/* Meta Info */}
                            <p className="text-sm mb-2">
                                <span className="text-red-600 font-semibold">By Admin</span>{' '}
                                <span className="text-gray-600 font-medium">/ 07 Comment</span>{' '}
                                <span className="text-gray-600 font-medium">/ Date - 09 ,09 ,2024</span>
                            </p>

                            {/* Heading */}
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Health Benefits of a Row food
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 !font-[Poppins] mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt
                                reprehenderit natus, soluta officia iure enim itaque. Iste qui exercitationem et
                                odit beatae debitis ratione molestiae quis atque.
                            </p>
                            <p className="text-gray-600 !font-[Poppins] mb-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus dolor odio
                                nobis eum voluptatem laudantium magni veritatis sint! Aspernatur est quisquam
                                modi laudantium. Assumenda neque vitae corrupti asperiores, quos vel aliquid hic
                                nisi nostrum repellendus dolorem placeat vero odit.
                            </p>

                            {/* Image Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Card 1 */}
                                <div className="space-y-3">
                                    <img
                                        src={banner2}
                                        alt="Green juice"
                                        className="rounded-md w-full h-70 object-cover"
                                    />
                                    <div className="flex items-start gap-2">
                                        {/* <FaPlusCircle className="text-red-500 mt-1" /> */}
                                        <p className="text-gray-800 !text-base font-bold">
                                            Lorem ipsum dolor consectetur adipisicing elit. <br />
                                            <span className="font-semibold text-gray-700">Molestias, dolorum!</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="space-y-3">
                                    <img
                                        src={display183}
                                        alt="Healthy food"
                                        className="rounded-md w-full h-70 object-cover"
                                    />
                                    <div className="flex items-start gap-2">
                                        {/* <FaPlusCircle className="text-red-500 mt-1" /> */}
                                        <p className="text-gray-800 !text-base font-bold">
                                            Lorem ipsum dolor consectetur adipisicing elit. <br />
                                            <span className="font-semibold text-gray-700">Molestias, dolorum!</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="px-4 py-8 max-w-4xl mx-auto">
                            {/* <!-- Testimonial Box --> */}
                            <div className="border rounded-lg p-6 relative bg-white shadow-sm">
                                <p className="text-gray-800 font-medium text-sm font-[poppins] mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum
                                    architecto odit soluta quas odio distinctio quae numquam? Quaerat nulla blanditiis
                                    possimus quae. Iusto doloribus, est aliquam delectus pariatur voluptatem cum iste
                                    exercitationem rem.
                                </p>
                                <p className="text-red-600 font-bold text-xl font-[poppins]">John martin</p>

                                {/* <!-- Icon Bubble --> */}
                                <div className="absolute bottom-4 right-4">
                                    <div className="w-10 h-10 flex items-center justify-center !rounded-tl-xl !rounded-tr-xl  !rounded-bl-xl border-2 border-red-300 bg-red-100 text-red-500 text-xl">
                                        <p className="text-4xl pb-2">. .</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Bottom Paragraph --> */}
                            <p className="text-gray-500  text-sm font-[poppins] !mt-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia magni explicabo fuga
                                molestiae architecto ipsa excepturi laudantium molestias, assumenda vel fugiat hic exercitationem.
                                Necessitatibus itaque et id! Ratione accusantium voluptatum optio rerum facilis expedita.
                            </p>
                        </section>

                        <div className="flex flex-wrap justify-between items-center mb-10 border p-2 rounded-lg gap-2 mx-3">
                            {/* <!-- Tags --> */}
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-1 border rounded text-sm text-gray-700">Cabbage</span>
                                <span className="px-4 py-1 border rounded text-sm text-gray-700">Appetizer</span>
                                <span className="px-4 py-1 border rounded text-sm text-gray-700">Meat Food</span>
                            </div>

                            {/* <!-- Social Icons --> */}
                            <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-700 hover:bg-gray-100">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-700 hover:bg-gray-100">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-700 hover:bg-gray-100">
                                    <i className="fab fa-instagram"></i>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-700 hover:bg-gray-100">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <aside className="w-full h-320 mb-10 flex flex-col max-w-xs p-4  bg-white rounded-lg shadow-md space-y-6">
                        {/* Search */}
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
                            />
                            <button className="bg-red-500 text-white px-4 rounded-r-md">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>

                        {/* Category */}
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Category</h2>
                            <ul className="space-y-2">
                                {[
                                    ['Milks & Dairies', 56],
                                    ['Sea Food', 34],
                                    ['Fresh Fruit', 53],
                                    ['Pet Food', 21],
                                    ['Meat Food', 45]
                                ].map(([name, count]) => (
                                    <li key={name} className="flex justify-between items-center border rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                                        <span>{name}</span>
                                        <span className="text-sm text-gray-500">({count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Post */}
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Recent Post</h2>
                            <div className="border rounded-lg p-3">
                                <img
                                    src={bg}
                                    alt="Recent post"
                                    className="rounded-md mb-3"
                                />
                                <p className="text-sm text-red-500 font-semibold mb-1">Sep 09, 2023</p>
                                <h3 className="text-md font-bold text-gray-800">10 Tasty Organic Fruit choose</h3>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* Latest Gallery */}
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Latest Gallery</h2>
                            <div className="grid grid-cols-3 gap-3">
                                <img src={display181} alt="Gallery 1" className="w-20 h-20 object-cover" />
                                <img src={display182} alt="Gallery 1" className="w-20 h-20 object-cover" />
                                <img src={display183} alt="Gallery 1" className="w-20 h-20 object-cover" />
                                <img src={display184} alt="Gallery 1" className="w-20 h-20  object-cover" />
                                <img src={display185} alt="Gallery 1" className="w-20 h-20 object-cover" />
                                <img src={display186} alt="Gallery 1" className="w-20 h-20  object-cover" />
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Popular Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {['Vegetables', 'Juice', 'Meat Food', 'Cabbage', 'Organic Food', 'Juice'].map(tag => (
                                    <span key={tag}
                                        className="px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
                <nav className="inline-flex justify-center items-center border border-gray-300 mb-10 rounded overflow-hidden">
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
export default Blog;