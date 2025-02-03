


"use client";

import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useCartStore } from "@/app/store/cartstore";


const ProductListing = ({ product }: { product: Product }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCartStore();
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
      <Link href={`product/${product.id}`}>
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          height={300}
          width={300}
          className="h-[250px] w-full object-cover"
        />
      </Link>
      
      <div className="text-center mt-3">
        <p className="text-lg font-medium text-gray-800">{product.name}</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-1">${product.price}</h3>

        {cartItem ? (
          <div className="flex items-center justify-center mt-2">
            <button 
              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)} 
              className="px-3 py-1 bg-gray-200 rounded-l">
              -
            </button>
            <span className="px-4 py-1 bg-gray-100">{cartItem.quantity}</span>
            <button 
              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)} 
              className="px-3 py-1 bg-gray-200 rounded-r">
              +
            </button>
            <button 
              onClick={() => removeFromCart(product.id)} 
              className="ml-2 px-3 py-1 bg-red-600 text-white rounded">
              Remove
            </button>
          </div>
        ) : (
          <button 
            onClick={() => addToCart({ 
              id: product.id, 
              name: product.name, 
              price: product.price, 
              image: urlFor(product.image).url(), 
              quantity: 1 
            })} 
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductListing;






