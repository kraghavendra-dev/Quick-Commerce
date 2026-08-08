import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
            <div>
                <h2 className='text-2xl font-bold mb-4'>QuickMart</h2>
                <p className='text-gray-300 leading-7'>Shop the latest groceries, beauty products, furniture,
                   fragrances, and much more at the best prices.</p>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-4'>About</h2>
                <ul className='space-y-3 text-gray-300'>
                    <li className='hover:underline cursor-pointer'>About us</li>
                    <li className='hover:underline cursor-pointer'>Contact us</li>
                    <li className='hover:underline cursor-pointer'> Careers</li>
                    <li className='hover:underline cursor-pointer'>QuickMart stories</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-4'>Customer Service</h2>
                <ul className='space-y-3 text-gray-300'>
                    <li className='hover:underline cursor-pointer'>Help Center</li>
                    <li className='hover:underline cursor-pointer'>Privacy Policy</li>
                    <li className='hover:underline cursor-pointer'>Terms & Conditions</li>
                    <li className='hover:underline cursor-pointer'>Return Policy</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-4 hover:underline cursor-pointer'>Contact Us</h2>
                <p className='text-gray-300 mb-2 hover:underline cursor-pointer'>Hyderabad, India</p>
                <p className='text-gray-300 mb-2 hover:underline cursor-pointer'>Support@QuickMart</p>
                <p className='text-gray-300 hover:underline cursor-pointer'>+91 9948235718</p>
                <div className='flex gap-4 mt-4 text-2xl'>
                    <span>
                        <FaFacebook/>
                    </span>
                    <span>
                        <FaInstagram/>
                    </span>
                    <span>
                        <FaTwitter/>
                    </span>
                    <span>
                        <FaLinkedin/>
                    </span>

                </div>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-4'>Group Companies</h2>
                <p className='text-gray-300 mb-2 hover:underline cursor-pointer'>OnLine.</p>
                <p className='text-gray-300 mb-2 hover:underline cursor-pointer'>Mumma.</p>
                <p className='text-gray-300 mb-2 hover:underline cursor-pointer'>E-com</p>
                <p className='text-gray-300 mb-2 hover:underline cursor-pointer'>shopEase.</p>
            </div>
        </div>
        <div className="border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-5 py-5 text-center text-gray-400">
                 {new Date().getFullYear()} QuickMart. All Rights Reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer