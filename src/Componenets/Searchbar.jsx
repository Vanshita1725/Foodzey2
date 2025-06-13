import React, { useState } from "react";


function Searchbar() {

return (
    <div className="w-full flex items-center justify-evenly p-4 ">

        <div className="flex lg:w-full  relative  h-9 border !border-green-600 rounded overflow-hidden">
            <input type="text"  placeholder="Search For items..." className="flex-1 px-4 py-2 md:w-50 lg:w-80 w-45 outline-none"/>

            <div className="relative">
                <button className="flex items-center justify-between px-2 h-full bg-white border-l border-green-400" >
                  <p className="pt-2 mt-1 me-2 text-sm md:flex">All categories</p>
                  <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <button  className="bg-gray-800 hover:bg-gray-700 text-white px-3 flex items-center justify-center" >
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>

        
    </div>
)
}

export default Searchbar;