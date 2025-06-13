import React from 'react'
import Nevbar from './Componenets/Nevbar';
import Footer from './Componenets/Fotter';
import bg from "./assets/Section → 1.jpg (1).png"
const Faq = () => {
  return (
    <div>
      <Nevbar />
      <div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center ">
                <p className="m-0">Faq</p>
                <p className="m-0">Home-Faq</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    
    {/* <!-- Image Section --> */}
    <div className="rounded-lg overflow-hidden shadow">
      <img src={bg} alt="Vegetables" className="w-full h-auto object-cover" />
    </div>

    {/* <!-- Accordion Section --> */}
    <div className="space-y-4">
      {/* <!-- Accordion Item 1 (Open) --> */}
      <div className="border rounded-md overflow-hidden">
        <button className="w-full text-left px-6 py-4 font-medium text-gray-800 flex justify-between items-center">
          What Facilities Does Your Hotel Have?
        <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
        <div className="px-6 pb-4 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.
        </div>
      </div>

      {/* <!-- Accordion Item 2 --> */}
      <div className="border rounded-md">
        <button className="w-full text-left px-6 py-2 font-medium text-gray-800 flex justify-between items-center hover:bg-gray-100">
          How Do I Book A Room For My Vacation?
         <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>

      {/* <!-- Accordion Item 3 --> */}
      <div className="border rounded-md">
        <button className="w-full text-left px-6 py-2 font-medium text-gray-800 flex justify-between items-center hover:bg-gray-100">
          How We are best among others?
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>

      {/* <!-- Accordion Item 4 --> */}
      <div className="border rounded-md">
        <button className="w-full text-left px-6 py-2 font-medium text-gray-800 flex justify-between items-center hover:bg-gray-100">
          Is There Any Fitness Center In Your Hotel?
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>

      {/* <!-- Accordion Item 5 --> */}
      <div className="border rounded-md">
        <button className="w-full text-left px-6 py-2 font-medium text-gray-800 flex justify-between items-center hover:bg-gray-100">
          What Type Of Room Service Do You Offer?
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>

      {/* <!-- Accordion Item 6 --> */}
      <div className="border rounded-md">
        <button className="w-full text-left px-6 py-2 font-medium text-gray-800 flex justify-between items-center hover:bg-gray-100">
          What Facilities Does Your Hotel Have?
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>

      {/* <!-- Accordion Item 7 --> */}
      <div className="border rounded-md">
        <button className="w-full text-left px-6 py-2 font-medium text-gray-800 flex justify-between items-center hover:bg-gray-100">
          How Do I Book A Room For My Vacation?
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  )
}

export default Faq;
