import React from 'react'

function SubscribeBox() {
    const onSubmitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-600'>Subscribe now & get 30% off</p>
        <p className='text-gray-400 mt-3'>
        Vastra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ' >
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button className='bg-black text-white hover:bg-gray-700 text-xs px-10 py-4 rounded-lg' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default SubscribeBox