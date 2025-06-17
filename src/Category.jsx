import Footer from "./Componenets/Fotter";
import Nevbar from "./Componenets/Nevbar";
import pngwing4 from "./assets/pngwing 4.png";
import pngwing7 from "./assets/pngwing 7.png";
import pngwing6 from "./assets/pngwing 6.png";
import pngwing3 from "./assets/pngwing 3.png";
import frame45 from "./assets/Frame 45.png";

function Category()
{
  return (
   
    <div >
         <Nevbar />
         <div className="bg-white text-center px-4 sm:px-6 lg:px-20 py-10">
                 <p className="text-sm sm:text-base lg:text-xl text-red-500 font-semibold uppercase mb-2">
                   Customer Favorites
                 </p>
                 <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
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
          <Footer />
    </div>
  );
}
 export default Category;