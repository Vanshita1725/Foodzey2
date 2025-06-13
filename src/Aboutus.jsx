import React from 'react'
import Nevbar from './Componenets/Nevbar';
import Footer from './Componenets/Fotter';
import bg from "./assets/Section → 1.jpg (1).png"

const Aboutus = () => {
  return (
    <div>
      <Nevbar />
<div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center ">
                <p className="m-0">Product</p>
                <p className="m-0">Home-Product</p>
            </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Carrot</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda rerum quod. Tempora magni autem a voluptatibus neque.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus suscipit voluptatum eius perferendis amet!.
            </p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed blanditiis quod aspernatur! Iusto?
            </p>

            {/* Stats */}
            <div className="bg-gray-100  p-4 flex flex-col sm:flex-row justify-around text-center gap-4 sm:gap-0">
              <div>
                <h3 className="!text-3xl font-bold !text-red-500">0.1<span className="text-gray-700 text-xl">k</span></h3>
                <p className="font-medium mt-1">Vendors</p>
              </div>
              <div>
                <h3 className="!text-3xl font-bold !text-red-500">23<span className="text-gray-700 text-xl">k</span></h3>
                <p className="font-medium mt-1">Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold !text-red-500">2<span className="text-gray-700 text-xl">k</span></h3>
                <p className="font-medium mt-1">Products</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src={bg}
              alt="Vegetables"
              className=" w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>


 <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* <!-- Card 1 --> */}
                    <div className="bg-gray-50 text-center p-6 rounded-lg shadow-sm">
                        {/* <!-- Decorative separator (or icon placeholder) --> */}
                        <h3 className="!text-lg font-semibold text-gray-800">Product Packing</h3>
                        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="bg-gray-50 text-center p-6 rounded-lg shadow-sm">
                        <h3 className="!text-lg font-semibold text-gray-800">24x7 Support</h3>
                        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className="bg-gray-50 text-center p-6 rounded-lg shadow-sm">
                        <h3 className="!text-lg font-semibold text-gray-800">Delivery in 5 Days</h3>
                        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                    {/* <!-- Card 4 --> */}
                    <div className="bg-gray-50 text-center p-6 rounded-lg shadow-sm">
                        <h3 className="!text-lg font-semibold text-gray-800">Payment Secure</h3>
                        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                </div>
            </section>

      <Footer />
    </div>
  )
}

export default Aboutus;
