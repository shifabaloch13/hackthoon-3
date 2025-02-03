



"use client";
import Image from "next/image";
import { useCartStore } from "../store/cartstore";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-2 mb-2">
            <Image
              src={item.image}
              alt={item.name}
              width={64}  // Explicit width
              height={64} // Explicit height
            />
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>${item.price.toFixed(2)}</p> {/* Ensure price formatting */}
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 font-bold"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;

