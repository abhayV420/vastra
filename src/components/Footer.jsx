import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
    
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Be it clothing, footwear or accessories, Vastra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to="/">Home</Link>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+61-289-663-4182</li>
                    <li>xyz@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='text-sm py-5 text-center'>Copyright @2025 vastra.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer