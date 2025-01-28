import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'


function SearchBar() {

    const {search, setSearch} = useContext(ShopContext)
  return (
    <div className=' border-t border-b bg-gray-50 text-center w-[0%] sm:w-1/2 hidden sm:inline-block '>
        <div className={`sm:inline-flex items-center justify-center border border-gray-400 sm:pl-16 px-5 sm:px-5 py-2 my-5 mx-3 rounded-full lg:w-[60%] sm:w-[80%]`}>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='flex-1 outline-none bg-inherit text-sm ' type="text" placeholder='Search' />
        </div>
    </div>
  )
}

export default SearchBar