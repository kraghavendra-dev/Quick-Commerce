import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../api/product'
import Navbar from '../../Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice';

const ProductDetailsPages = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartItem = cartItems.find((item) => item.id === Number(id));

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(""); 

                const data = await getSingleProduct(id);
                setProduct(data);
            } catch (error) {
                setError("Failed to fetch product details.");
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    },[id]);


  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto my-4 px-4 py-6 sm:px-6 lg:px-8">
        {loading && <p className="text-center text-lg text-gray-500">Loading.....</p>}
        {error && <p className="text-center text-lg text-red-500">{error}</p>}

        {!loading && !product ? (
          <p className="text-center text-lg text-gray-500">No Product found.</p>
        ) : (
          product && (
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="rounded-3xl bg-gray-100 p-4 shadow-sm sm:p-6">
                <div className="flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-3xl bg-white p-4 sm:p-6">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full max-h-[520px] max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{product.title}</h2>
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-600">{product.category}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span>
                      <span className="font-semibold text-gray-900">Brand:</span> {product.brand}
                    </span>
                    <span>
                      <span className="font-semibold text-gray-900">Rating:</span> {product.rating?.toFixed(1)} ⭐
                    </span>
                    <span>
                      <span className="font-semibold text-gray-900">Stock:</span> {product.stock}
                    </span>
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-gray-700 leading-7">{product.description}</p>
                  <p className="mt-4 text-sm text-gray-500">{product.availabilityStatus}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-blue-50 p-5 text-center">
                    <p className="text-sm uppercase text-blue-600">Price</p>
                    <p className="mt-2 text-3xl font-bold text-blue-700">₹{product.price.toFixed(2)}</p>
                  </div>
                  <div className="rounded-3xl bg-green-50 p-5 text-center">
                    <p className="text-sm uppercase text-green-700">Discount</p>
                    <p className="mt-2 text-3xl font-bold text-green-700">{product.discountPercentage?.toFixed(1)}%</p>
                  </div>
                </div>

                <div className="space-y-4 rounded-3xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Warranty:</span> {product.warrantyInformation}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Return Policy:</span> {product.returnPolicy}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1fr_0.6fr]">
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                    {!cartItem ? (
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className="w-full rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition cursor-pointer hover:bg-blue-700 sm:w-auto"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500 text-white cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-lg font-bold">{cartItem.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(product.id))}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green-500 text-white cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                  <button className="w-full rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition cursor-not-allowed hover:bg-green-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </>
  )
}

export default ProductDetailsPages