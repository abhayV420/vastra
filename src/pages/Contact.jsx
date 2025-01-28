import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import SubscribeBox from '../components/SubscribeBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px] max-h-[350px] ' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6 '>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>2006, SKYE Suites <br /> King street, Sydney, Australia</p>
            <p className='text-gray-500'>Tel: (+61) 04-1388-3262 <br /> Email: admin@vastra.com</p>
            <p className='font-semibold text-xl text-gray-600'>Careers at Vastra</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black bg-black px-8 py-4 text-sm hover:bg-white hover:text-black text-white rounded-lg transition-all duration-500'>Explore Jobs</button>
          </div>
      </div>

      <SubscribeBox/>
    </div>
  )
}

export default Contact