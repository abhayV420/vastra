import React from 'react'
import {assets} from '../assets/assets'


const Banner = () => {
 
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
                    {/* Left Side */}
                    <img className='w-full sm:w-1/2' src={assets.slideone} alt="" /> 
                    {/* Right SIde */}
                   <img className='w-full sm:w-1/2' src={assets.sale} alt="" /> 
    </div>
  )
}

export default Banner