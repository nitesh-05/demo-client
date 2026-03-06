"use client";
import { useState } from "react";

export default function POS() {
  const menu = [
    {
      id: 1,
      name: "Burger",
      price: 120,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O51D0bNZaaoAvd_3ts-xqUIMqOOlc4e20g&s",
    },
    {
      id: 3,
      name: "Pasta",
      price: 180,
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    },
    {
      id: 4,
      name: "Sandwich",
      price: 150,
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    },
  ];

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addItem = (item) => {
    const existing = cart.find((c) => c.id === item.id);

    if (existing) {
      setCart(
        cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)),
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeItem = (item) => {
    const existing = cart.find((c) => c.id === item.id);

    if (existing.qty === 1) {
      setCart(cart.filter((c) => c.id !== item.id));
    } else {
      setCart(
        cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty - 1 } : c)),
      );
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      status: "Pending",
    };

    setOrders([newOrder, ...orders]);
    setCart([]);
  };

  const updateStatus = (orderId, status) => {
    setOrders(orders.map((o) => (o.id === orderId ? { ...o, status } : o)));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Cloud Kitchen POS</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* MENU */}

        <div className="lg:col-span-7">
          <h2 className="text-xl font-bold mb-4">Menu</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menu.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  className="h-40 w-full object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-gray-500">₹{item.price}</p>

                  <button
                    onClick={() => addItem(item)}
                    className="mt-3 w-full bg-black text-white py-2 rounded-lg"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CURRENT ORDER */}

        <div className="lg:col-span-3 bg-white rounded-xl shadow p-4 mt-10">
          <h2 className="text-xl font-bold mb-4">Current Order</h2>

          {cart.length === 0 && <p className="text-gray-500">No items added</p>}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3"
            >
              <div>
                {item.name} x{item.qty}
              </div>

              <div className="flex gap-2 items-center">
                <button
                  onClick={() => removeItem(item)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  -
                </button>

                {item.qty}

                <button
                  onClick={() => addItem(item)}
                  className="bg-green-500 text-white px-2 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg"
          >
            Place Order
          </button>
        </div>

        {/* ORDER HISTORY */}

        <div className="lg:col-span-2 bg-white rounded-xl shadow p-4 mt-10">
          <h2 className="text-xl font-bold mb-4">Orders</h2>

          {orders.map((order) => (
            <div key={order.id} className="border p-3 rounded mb-3">
              <p className="font-semibold">₹{order.total}</p>

              <p className="text-sm text-gray-500">{order.status}</p>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => updateStatus(order.id, "Preparing")}
                  className="text-xs bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Preparing
                </button>

                <button
                  onClick={() => updateStatus(order.id, "Ready")}
                  className="text-xs bg-green-600 text-white px-2 py-1 rounded"
                >
                  Ready
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
