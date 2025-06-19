import Nevbar from "./Componenets/Nevbar";
import salad1 from "./assets/Fattoush salad.png";
import salad2 from "./assets/Vegetable salad.png";
import salad3 from "./assets/Egg salad.png";
import Footer from "./Componenets/Fotter";

function Pages(){
    return(
        <div>
            <Nevbar/>

             <div className="max-w-7xl mx-auto  px-4 py-12">
                    <p className="text-sm font-semibold text-red-400 uppercase">Special Dishes</p>
                    <div className="flex justify-between">
                      <p className="md:text-4xl lg:text-6xl font-bold mt-2 mb-8 lg:w-140 w-90 leading-tight">Standout Dishes From Our Menu</p>
                      <div className="flex gap-2" style={{ alignItems: "center" }} >
                        <button className="bg-gray-200 text-gray-700 lg:p-3 md:p-2 p-1 md:w-12 md:h-12 !text-3xl  w-10 h-10 flex items-center justify-center !rounded-full hover:bg-gray-300 ">
                          <ion-icon name="chevron-back-outline"></ion-icon>
                        </button>
                        <button className="bg-red-500 text-white lg:p-3 md:p-2 p-1 !text-3xl md:w-12 md:h-12 w-10 h-10  flex items-center justify-center !rounded-full hover:bg-red-600">
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
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md relative">
                          <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-bl-xl">
                            <ion-icon role="img" className="md hydrated" name="heart-outline"></ion-icon>
                          </div>
                          <img alt="Egg vegi salad" className="w-40 h-40 object-cover rounded-full mx-auto" src={salad3}></img>
                          <h3 className="text-lg font-semibold text-center mt-4">Egg vegi salad</h3>
                          <p className="text-gray-500 text-center text-sm mt-1">Description of the item</p>
                        </div>
                      </div>
                      </div>
                      </div>
                    
            <Footer /> 
        </div>
    )
}
export default Pages;