import Footer from "./Componenets/Fotter";
import Nevbar from "./Componenets/Nevbar"
import offers from "./assets/icon-1.svg fill.png";
import offers1 from "./assets/icon-2.svg.png";
import offers2 from "./assets/icon-3.svg.png";
import offers3 from "./assets/icon-4.svg.png";
import offers4 from "./assets/icon-5.svg.png";

import image28 from "./assets/image 28.png";
import icon01 from "./assets/01.png";
import icon02 from "./assets/02.png";
import icon03 from "./assets/03.png";
import fotter from "./assets/fotter.jpg";

function Element(){
    return(
        <div>
            <Nevbar/>
            
                     
                     <section className="bg-white px-4 mt-10 sm:px-6 lg:px-8 pt-0 pb-16">
                       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
           
                         {/* Left Image */}
                         <div className="flex justify-center">
                           <img
                             src={image28}
                             alt="Salad Dish"
                             className="rounded-2xl shadow-md w-full max-w-md md:max-w-lg"
                           />
                         </div>
           
                         {/* Right Content */}
                         <div>
                           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Nunito] font-bold mb-10">
                             Why People Choose Us?
                           </h2>
           
                           {/* Feature 1 */}
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
           
                           {/* Feature 2 */}
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
           
                           {/* Feature 3 */}
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
                   <section className="max-w-7xl mx-auto   px-4 pb-10">
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                       {/* Feature Item */}
                       <div className="!bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
                         <img src={offers} alt="Offer Icon" className="h-10 w-10" />
                         <div>
                           <h4 className="font-semibold !text-lg">Best prices & offers</h4>
                           <p className="text-sm text-gray-500">Orders $50 or more</p>
                         </div>
                       </div>
           
                       <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
                         <img src={offers1} alt="Free Delivery" className="h-10 w-10" />
                         <div>
                           <h4 className="font-semibold !text-lg">Free delivery</h4>
                           <p className="text-sm text-gray-500">24/7 amazing services</p>
                         </div>
                       </div>
           
                       <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
                         <img src={offers2} alt="Daily Deal" className="h-10 w-10" />
                         <div>
                           <h4 className="font-semibold !text-lg">Great daily deal</h4>
                           <p className="text-sm text-gray-500">When you sign up</p>
                         </div>
                       </div>
           
                       <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
                         <img src={offers3} alt="Wide Assortment" className="h-10 w-10" />
                         <div>
                           <h4 className="font-semibold !text-lg">Wide assortment</h4>
                           <p className="text-sm text-gray-500">Mega Discounts</p>
                         </div>
                       </div>
           
                       <div className="bg-gray-200 p-2 flex items-center gap-3 rounded-lg shadow">
                         <img src={offers4} alt="Easy Returns" className="h-10 w-10" />
                         <div>
                           <h4 className="font-semibold !text-lg">Easy returns</h4>
                           <p className="text-sm text-gray-500">Within 30 days</p>
                         </div>
                       </div>
                     </div>
                   </section>
           
           
                <Footer />
           
                   <script src="https://kit.fontawesome.com/a076d05399.js" ></script>
                 </div>
        
    )
}

export default Element