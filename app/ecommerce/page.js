"use client";
import { useState } from "react";

export default function Ecommerce() {
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 1999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 199,
      image:
        "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=500",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 129,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 4,
      name: "Laptop",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Mobile Phone",
      price: 529,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeItem = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item,
        ),
      );
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Ecommerce UI Demo
      </h2>

      <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* PRODUCT GRID */}

        <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                className="h-56 w-full object-cover hover:scale-105 transition duration-300"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

                <p className="text-gray-500 mb-3">
                  Premium quality product with modern design.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">
                    ${product.price}
                  </span>

                  <button
                    onClick={() => addItem(product)}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 active:scale-95 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CART PANEL */}

        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-10">
          <h3 className="text-xl font-bold mb-4">Cart</h3>

          {cart.length === 0 && <p className="text-gray-500">Cart is empty</p>}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 animate-fade"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeItem(item)}
                  className="bg-red-500 text-white px-2 rounded hover:scale-110 transition"
                >
                  -
                </button>

                {item.qty}

                <button
                  onClick={() => addItem(item)}
                  className="bg-green-500 text-white px-2 rounded hover:scale-110 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
