import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, CircleUserRound, Menu, X } from "lucide-react"
import { useSelector } from 'react-redux'

const Navbar = ({ search = "", setSearch = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-4 px-4">
        <div className="flex h-20 items-center justify-between gap-4 md:gap-8">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-blue-600 md:text-3xl">QuickMart</h1>
          </Link>

          <div className="flex flex-1 items-center justify-end gap-3 md:hidden">
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:border-blue-500 hover:text-blue-600"
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-2">
                {cartItems.length}
              </span>
            </Link>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Find Products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-lg transition hover:text-blue-700"
            >
              <CircleUserRound size={24} />
              Login
            </Link>
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-1 text-lg text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              <ShoppingCart size={24} />
              Cart
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-2">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <div className="space-y-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Find Products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <Link
              to="/login"
              className="block rounded-full border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="block rounded-full border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cart ({cartItems.length})
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar