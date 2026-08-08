import React from 'react'
import HeroImage from "../../assets/Retail_E-Commerce_header_banner.jpg"



const Header = () => {
  return (
    <div className="mx-4 my-4 sm:mx-6 lg:mx-8">
      <header
        className="relative w-full min-h-[420px] sm:min-h-[460px] md:min-h-[520px] 
        overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 px-6 py-8 sm:px-10 md:px-16 lg:px-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Welcome to QuickMart</h1>
            <p className="mt-2 text-lg font-semibold sm:text-xl md:text-2xl">Your One-Stop Shop for All Your Needs!</p>
          </div>

          <p className="max-w-3xl text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            QuickMart is your one-stop online shopping destination for quality products at affordable prices.
            Browse products easily, search for what you need, and add your favorite items to your cart.
            Shop smarter, faster, and better with QuickMart!
          </p>

          <div>
            <a
              href="#products"
              className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm 
              font-semibold text-white transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-base"
            >
              Order Now
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header