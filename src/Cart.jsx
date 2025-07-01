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
  const [quantities, setQuantities] = useState({});

  // Fetch cart on mount
  useEffect(() => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to view the cart.");
      setLoading(false);
      return;
    }
    import('axios').then(({ default: axios }) => {
      axios.get("https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCart", {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          if (res.data.success && res.data.data && res.data.data.length > 0) {
            setCart(res.data.data[0]);
            // Initialize quantities state from cart
            const initialQuantities = {};
            res.data.data[0].items.forEach(item => {
              initialQuantities[item.productId] = item.quantity;
            });
            setQuantities(initialQuantities);
          } else {
            setCart(null);
          }
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to load cart: " + (err.response?.data?.message || err.message));
          setLoading(false);
        });
    });
  }, []);

  // Quantity change handlers
  const handleChange = (productId, value) => {
    const newValue = Math.max(1, parseInt(value) || 1);
    setQuantities((prev) => ({ ...prev, [productId]: newValue }));
    // Optionally, send an API request here to update quantity in backend
  };
  const handleIncrement = (productId) => {
    setQuantities((prev) => ({ ...prev, [productId]: (prev[productId] || 1) + 1 }));
    // Optionally, send an API request here to update quantity in backend
  };
  const handleDecrement = (productId) => {
    setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, (prev[productId] || 1) - 1) }));
    // Optionally, send an API request here to update quantity in backend
  };

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to add items to the cart.");
      return;
    }

    // Prepare the payload
    const productColour = Array.isArray(product.colour || product.color)
      ? (product.colour || product.color)[0]
      : (product.colour || product.color || "Red");
    const productSize = Array.isArray(product.size)
      ? product.size[0]
      : (product.size || "Large");

    const payload = {
      productId: product._id,
      quantity: 1,
      price: product.price,
      totalPrice: product.price,
      productColour,
      productSize
    };

    try {
      await axios.post(
        "https://ecommerce-shop-qg3y.onrender.com/api/cart/addToCart",
        payload,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Product added to cart successfully!");
    } catch (err) {
      alert("Failed to add to cart: " + JSON.stringify(err.response?.data || err.message));
    }
  };

  // Deduplicate cart items by productId and sum quantities
  const getDedupedCartItems = (items) => {
    const map = {};
    items.forEach(item => {
      if (!map[item.productId]) {
        map[item.productId] = { ...item };
      } else {
        map[item.productId].quantity += item.quantity;
      }
    });
    return Object.values(map);
  };

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
                getDedupedCartItems(cart.items).map((item) => (
                  <tr key={item.productId}>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img src={item.productImage && item.productImage[0] ? item.productImage[0] : product} className="w-10 h-10 rounded-md border" alt={item.productName} />
                      {item.productName}
                    </td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4 w-20">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => handleDecrement(item.productId)}
                          className="px-2 pb-2 !text-3xl"
                        >-</button>
                        <input
                          type="number"
                          className="w-8 text-center border-0"
                          value={quantities[item.productId] || item.quantity || 1}
                          min="1"
                          onChange={e => handleChange(item.productId, e.target.value)}
                        />
                        <button
                          onClick={() => handleIncrement(item.productId)}
                          className="px-2 !text-lg"
                        >+</button>
                      </div>
                    </td>
                    <td className="px-6 py-4">${item.price * (quantities[item.productId] || item.quantity || 1)}</td>
                    <td className="px-6 py-4 text-gray-500 hover:text-red-600 cursor-pointer">
                      <i className="fas fa-trash-alt" onClick={() => handleDelete(item.productId)}></i>
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
        {/* ...rest of your code... */}
      </section>

      <Footer />
    </div>
  )
}

export default Cart;