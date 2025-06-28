import React, { useEffect, useState } from 'react'
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
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

      const handleChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setQuantity(value);
    };
  useEffect(() => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token");
    fetch("https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCart", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setCart(data.data[0]);
        } else {
          setCart(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load cart");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Nevbar />
       <div className="flex text-white bg-red-600 justify-between text-center py-3 lg:ps-42 lg:pe-37 px-4 items-center ">
                <p className="m-0">Cart</p>
                <p className="m-0">Home / Cart</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10">
  <div className="overflow-x-auto bg-white shadow-md rounded-lg">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-6 py-3">Product</th>
          <th className="px-6 py-3">Price</th>
          <th className="px-6 py-3">Quantity</th>
          <th className="px-6 py-3">Total</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {loading && (
    <tr><td colSpan={5} className="text-center py-6">Loading cart...</td></tr>
  )}
  {error && (
    <tr><td colSpan={5} className="text-center text-red-500 py-6">{error}</td></tr>
  )}
  {cart && cart.items && cart.items.length > 0 ? (
    cart.items.map((item, idx) => (
      <tr key={item.productId || idx} className="hover:bg-gray-50">
        <td className="px-6 py-4 flex items-center gap-3">
          <img src={item.productImage && item.productImage[0] ? item.productImage[0] : product} className="w-10 h-10 rounded-md border" alt={item.productName} />
          {item.productName}
        </td>
        <td className="px-6 py-4">${item.price}</td>
        <td className="px-6 py-4 w-20"><div className="flex items-center border rounded">
                                    <button 
                                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                        className="px-2 pb-2 !text-3xl"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        className="w-8 text-center border-0"
                                        value={quantity}
                                        min="1"
                                        onChange={handleChange}
                                    />
                                    <button 
                                        onClick={() => setQuantity(prev => prev + 1)}
                                        className="px-2 !text-lg"
                                    >
                                        +
                                    </button>
                                </div></td>
        <td className="px-6 py-4">${item.price * item.quantity}</td>
        <td className="px-6 py-4 text-gray-500 hover:text-red-600 cursor-pointer">
          <i className="fas fa-trash-alt"></i>
        </td>
      </tr>
    ))
  ) : (!loading && !error && (
    <tr><td colSpan={5} className="text-center py-6">Your cart is empty.</td></tr>
  ))}
      </tbody>
    </table>
  </div>

  {/* <!-- Bottom Actions --> */}
  <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
   <Link to="/" className="text-sm !text-gray-700  underline">Continue Shopping</Link>
   <Link to="/Checkout"><button className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
      Check Out
    </button></Link> 
  </div>
</div>

  <section className="max-w-7xl my-20 mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Popular Products</h2>
                    <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>

                {/* <!-- Product Grid --> */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 mx-3 lg:grid-cols-4">
                    {/* <!-- Card --> */}
                    <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div className="bg-gray-50 p-4 rounded">
                            <img src={product} alt="Product" className="mx-auto h-40 object-contain" />
                        </div>
                        <div className="mt-4">
                            <p className="te
                            
                            xt-xs text-gray-400">Snacks</p>
                            <p className="text-xs text-gray-400">(4.5)</p>
                            <h3 className="!text-sm font-semibold mt-1">Best snakes with hazel nut mix pack 200gm</h3>
                            <p className="text-red-600 font-bold mt-2">$120.25 <span className="line-through text-gray-400 text-sm ml-1">$123.25</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div className="bg-gray-50 p-4 rounded">
                            <img src={product1} alt="Product" className="mx-auto h-40 object-contain" />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs text-gray-400">Snacks</p>
                            <p className="text-xs text-gray-400">(5.0)</p>
                            <h3 className="!text-sm font-semibold mt-1">Sweet snakes crunchy nut mix 250gm pack</h3>
                            <p className="text-red-600 font-bold mt-2">$100.00 <span className="line-through text-gray-400 text-sm ml-1">$110.00</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div className="bg-gray-50 p-4 rounded">
                            <img src={banner1} alt="Product" className="mx-auto h-40 object-contain" />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs text-gray-400">Snacks</p>
                            <p className="text-xs text-gray-400">(4.5)</p>
                            <h3 className="!text-sm font-semibold mt-1">Best snakes with hazel nut mix pack 200gm</h3>
                            <p className="text-red-600 font-bold mt-2">$120.25 <span className="line-through text-gray-400 text-sm ml-1">$123.25</span></p>
                        </div>
                    </div>

                    {/* <!-- Card --> */}
                    <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
                        <div className="bg-gray-50 p-4 rounded">
                            <img src={banner2} alt="Product" className="mx-auto h-40 object-contain" />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs text-gray-400">Snacks</p>
                            <p className="text-xs text-gray-400">(5.0)</p>
                            <h3 className="!text-sm font-semibold mt-1">Sweet snakes crunchy nut mix 250gm pack</h3>
                            <p className="text-red-600 font-bold mt-2">$100.00 <span className="line-through text-gray-400 text-sm ml-1">$110.00</span></p>
                        </div>
                    </div>
                </div>
            </section>

      <Footer />
    </div>
  )
}

export default Cart;