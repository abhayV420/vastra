import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from './CartTotal';
import { toast } from 'react-toastify';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  

  useEffect(()=>{
    const tempData = [];

    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  },[cartItems])
  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3 text-center'>
        <Title text1={"YOUR"} text2={"CART"}/>
      </div>

      <div>
        {
          cartData.map((item, index)=>{
            const productData = products.find((product)=>product._id === item._id);

            return (
              <div key={index} className='py-4 flex flex-col justify-center items-center gap-4 '>
               <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-2'>
                 <div className='border-2 border-black flex items-start gap-6 bg-gray-100 rounded-lg sm:w-1/2 w-[300PX] '>
                    <img className='w-16 sm:w-20 rounded-lg' src={productData.image[0]} alt="" />
                    <div>
                      <p className='text-xs sm:text-lg font-medium' > {productData.name} </p>
                      <div className='flex items-center gap-5 mt-2' >
                        <p> {currency}{productData.price} </p>
                        <p className='px-2 sm:px-3 sm:py-1 border rounded-lg bg-gray-700 text-white'> {item.size} </p>
                      </div>
                    </div>
                  </div>

               <div className='flex gap-2 justify-center items-center'>
                 <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border-black  bg-gray-100 rounded-lg min-w-[80px] ' type="number" min={1} defaultValue={item.quantity} />
                 <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-6 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
               </div>

               </div>
                
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>cartData.length > 0 ? navigate('/place-order') : toast.error('The cart is empty')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart