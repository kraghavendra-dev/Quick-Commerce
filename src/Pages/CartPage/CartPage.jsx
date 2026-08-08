import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar';
import { removeFromCart } from '../../features/cart/cartSlice';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart?.cartItems || []);

    const totalPrice = Math.round(
    
    cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
      0
    )
);

    return (
        <>
        <Navbar/>
            <main className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
               <div className="mx-auto max-w-7xl">

                {/* 2 Column Layout */}
                   <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

                    {/* LEFT - Product Details */}
                    <section className="lg:col-span-2 space-y-5">

                        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <h2 className="text-xl font-semibold text-slate-900">My Cart</h2>
                              <p className="text-sm text-slate-500">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</p>
                            </div>

                            {cartItems.length === 0 ? (
                            <p className="py-12 text-center text-gray-500">
                                Your cart is empty.
                            </p>
                            ) : (
                            <div className="space-y-5 pt-6">
                            {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6"
                            >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                              <div className="flex h-28 w-full items-center justify-center rounded-3xl bg-white p-3 shadow-sm sm:w-36">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                />
                              </div>

                              <div className="flex flex-1 flex-col gap-3">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                  <div>
                                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.brand || 'Unknown brand'}</p>
                                  </div>
                                  <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">Qty {item.quantity}</span>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3 sm:items-center">
                                  <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Unit Price</p>
                                    <p className="mt-2 font-semibold text-slate-900">₹{item.price.toFixed(2)}</p>
                                  </div>
                                  <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Total</p>
                                    <p className="mt-2 font-semibold text-slate-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                                  </div>
                                  <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Status</p>
                                    <p className="mt-2 font-semibold text-green-600">In Stock</p>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                  <button
                                    onClick={() =>
                                        dispatch(removeFromCart(item.id))
                                    }
                                    className="inline-flex w-full items-center justify-center rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition cursor-pointer hover:bg-red-600 sm:w-auto"
                                    >
                                        Remove
                                  </button>
                                  <div className="rounded-2xl bg-white p-3 text-sm text-slate-600 shadow-sm">
                                    <span className="font-semibold text-slate-900">Product ID:</span> {item.id}
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    ))}
                </div>
              )}
            </div>

          </section>

          {/* RIGHT - Price Details */}
          <aside className="lg:col-span-1">
            <div className="sticky top-5 rounded-3xl bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:p-6">

              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Order Summary</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Price Details</h2>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Products ({cartItems.length})</span>
                    <span className="font-semibold text-slate-900">₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Discount</p>
                    <p className="mt-3 font-semibold text-green-700">- ₹0</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Delivery</p>
                    <p className="mt-3 font-semibold text-green-700">Free</p>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 p-4 text-white shadow-lg">
                  <div className="flex items-center justify-between text-sm opacity-90">
                    <span>Estimated Total</span>
                    <span className="font-semibold text-white">₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-900">You will save more on this order.</p>
                  <p className="mt-2 text-xs text-slate-500">Enjoy free delivery and fast checkout with your current cart.</p>
                </div>

                <button
                  className="w-full rounded-3xl bg-orange-500 py-4 text-sm cursor-not-allowed font-semibold text-white transition hover:bg-orange-600 active:scale-[0.99]"
                >
                  Place Order
                </button>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>

        
        
        </>
    );
};

export default CartPage