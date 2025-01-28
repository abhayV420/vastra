import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'


function SearchBar() {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    
  return showSearch ? (
    <div className ={`border-t border-b bg-gray-50 text-center sm:hidden inline-block `}>
        <div className='inline-flex items-center justify-center border border-gray-400 px-16  sm:px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 '>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
        </div>
    </div>
  ) : null
}

export default SearchBar