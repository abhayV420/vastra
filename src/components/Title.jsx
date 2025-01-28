import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='w-8 sm:w-32 h-[1px] sm:h-[2px] bg-gray-300 '></p>
        <p className='text-gray-600'>{text1} {text2} </p>
        <p className='w-8 sm:w-32 h-[1px] sm:h-[2px] bg-gray-300 '></p>
    </div>
  )
}

export default Title