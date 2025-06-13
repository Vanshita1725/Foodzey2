import React from 'react'
import Nevbar from './Componenets/Nevbar';
import Footer from './Componenets/Fotter';
import banner2 from "./assets/2.jpg.png";
import banner1 from "./assets/1.jpg (1).png";
import banner3 from "./assets/3.jpg (1).png";
import banner4 from "./assets/→ 5.jpg (1).png";
import banner5 from "./assets/→ 4.jpg.png";
import product from "./assets/9.jpg.png";
import product1 from "./assets/10.jpg.png";
import { Link } from 'react-router';

const Cart = () => {
  return (
    <div>
      <Nevbar />
       <div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center ">
                <p className="m-0">Cart</p>
                <p className="m-0">Home-Product</p>
            </div>

            <div class="max-w-6xl mx-auto px-4 py-10">
  <div class="overflow-x-auto bg-white shadow-md rounded-lg">
    <table class="min-w-full text-sm text-left">
      <thead class="bg-gray-100 text-gray-700">
        <tr>
          <th class="px-6 py-3">Product</th>
          <th class="px-6 py-3">Price</th>
          <th class="px-6 py-3">Quantity</th>
          <th class="px-6 py-3">Total</th>
          <th class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        {/* <!-- Row Start --> */}
        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 flex items-center gap-3">
            <img src={banner1} class="w-10 h-10 rounded-md border" />
            Organic Lemon
          </td>
          <td class="px-6 py-4">$56.00</td>
          <td class="px-6 py-4">
            <div class="flex items-center border rounded overflow-hidden w-fit">
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">+</button>
              <span class="px-3">1</span>
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">-</button>
            </div>
          </td>
          <td class="px-6 py-4">$56.00</td>
          <td class="px-6 py-4 text-gray-500 hover:text-red-600 cursor-pointer">
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>
        {/* <!-- Repeat for other products --> */}
        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 flex items-center gap-3">
            <img src={banner2} class="w-10 h-10 rounded-md border" />
            Apple Juice
          </td>
          <td class="px-6 py-4">$75.00</td>
          <td class="px-6 py-4">
            <div class="flex items-center border rounded overflow-hidden w-fit">
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">+</button>
              <span class="px-3">1</span>
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">-</button>
            </div>
          </td>
          <td class="px-6 py-4">$75.00</td>
          <td class="px-6 py-4 text-gray-500 hover:text-red-600 cursor-pointer">
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>

        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 flex items-center gap-3">
            <img src={banner3} class="w-10 h-10 rounded-md border" />
            Apple Juice
          </td>
          <td class="px-6 py-4">$75.00</td>
          <td class="px-6 py-4">
            <div class="flex items-center border rounded overflow-hidden w-fit">
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">+</button>
              <span class="px-3">1</span>
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">-</button>
            </div>
          </td>
          <td class="px-6 py-4">$75.00</td>
          <td class="px-6 py-4 text-gray-500 hover:text-red-600 cursor-pointer">
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>

        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 flex items-center gap-3">
            <img src={banner5} class="w-10 h-10 rounded-md border" />
            Apple Juice
          </td>
          <td class="px-6 py-4">$75.00</td>
          <td class="px-6 py-4">
            <div class="flex items-center border rounded overflow-hidden w-fit">
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">+</button>
              <span class="px-3">1</span>
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">-</button>
            </div>
          </td>
          <td class="px-6 py-4">$75.00</td>
          <td class="px-6 py-4 text-gray-500 hover:text-red-600 cursor-pointer">
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>

        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 flex items-center gap-3">
            <img src={banner4} class="w-10 h-10 rounded-md border" />
            Apple Juice
          </td>
          <td class="px-6 py-4">$75.00</td>
          <td class="px-6 py-4">
            <div class="flex items-center border rounded overflow-hidden w-fit">
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">+</button>
              <span class="px-3">1</span>
              <button class="px-2 py-1 text-gray-600 hover:bg-gray-200">-</button>
            </div>
          </td>
          <td class="px-6 py-4">$75.00</td>
          <td class="px-6 py-4 text-gray-500 hover:text-red-600 cursor-pointer">
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>

        
        {/* <!-- Add more rows similarly --> */}
      </tbody>
    </table>
  </div>

  {/* <!-- Bottom Actions --> */}
  <div class="mt-6 flex flex-col sm:flex-row justify-between items-center">
   <Link to="/" class="text-sm !text-gray-700  underline">Continue Shopping</Link>
   <Link to="/Checkout"><button class="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
      Check Out
    </button></Link> 
  </div>
</div>

  <section class="max-w-7xl my-20 mx-auto">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold">Popular Products</h2>
                    <p class="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>

                {/* <!-- Product Grid --> */}
                <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-2 mx-3 lg:grid-cols-4">
                    {/* <!-- Card --> */}
                    <div class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-50 p-4 rounded">
                            <img src={product} alt="Product" class="mx-auto h-40 object-contain" />
                        </div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-400">Snacks</p>
                            <p class="text-xs text-gray-400">(4.5)</p>
                            <h3 class="!text-sm font-semibold mt-1">Best snakes with hazel nut mix pack 200gm</h3>
                            <p class="text-red-600 font-bold mt-2">$120.25 <span class="line-through text-gray-400 text-sm ml-1">$123.25</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-50 p-4 rounded">
                            <img src={product1} alt="Product" class="mx-auto h-40 object-contain" />
                        </div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-400">Snacks</p>
                            <p class="text-xs text-gray-400">(5.0)</p>
                            <h3 class="!text-sm font-semibold mt-1">Sweet snakes crunchy nut mix 250gm pack</h3>
                            <p class="text-red-600 font-bold mt-2">$100.00 <span class="line-through text-gray-400 text-sm ml-1">$110.00</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-50 p-4 rounded">
                            <img src={banner1} alt="Product" class="mx-auto h-40 object-contain" />
                        </div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-400">Snacks</p>
                            <p class="text-xs text-gray-400">(4.5)</p>
                            <h3 class="!text-sm font-semibold mt-1">Best snakes with hazel nut mix pack 200gm</h3>
                            <p class="text-red-600 font-bold mt-2">$120.25 <span class="line-through text-gray-400 text-sm ml-1">$123.25</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div class="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-50 p-4 rounded">
                            <img src={banner2} alt="Product" class="mx-auto h-40 object-contain" />
                        </div>
                        <div class="mt-4">
                            <p class="text-xs text-gray-400">Snacks</p>
                            <p class="text-xs text-gray-400">(5.0)</p>
                            <h3 class="!text-sm font-semibold mt-1">Sweet snakes crunchy nut mix 250gm pack</h3>
                            <p class="text-red-600 font-bold mt-2">$100.00 <span class="line-through text-gray-400 text-sm ml-1">$110.00</span></p>
                        </div>
                    </div>
                </div>
            </section>

      <Footer />
    </div>
  )
}

export default Cart;