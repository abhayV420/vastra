import React, { useContext } from 'react'
import { getAuth} from 'firebase/auth'
import { app } from '../firebase'
import { FirebaseContext } from '../context/FirebaseContext'

const auth = getAuth(app)

function SignUp() {
    const {setLoginState, setEmail, setPassword, email, password} = useContext(FirebaseContext);

   
  return (
    <div className='flex flex-col sm:min-w-[350px] min-w-200px gap-1 '>
         <div className='flex flex-col gap-1'>
             {/* <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/> */}
             <input onChange={(e)=>setEmail(e.target.value)}  value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
             <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
             {/* <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Confirm Password' required/> */}
         </div>
         <p onClick={()=>setLoginState('Login')} className='cursor-pointer text-sm'>Login Here</p>
      
    </div>
  )
}

export default SignUp