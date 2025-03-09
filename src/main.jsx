// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import Firebaseprovider from './context/FirebaseContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
         <Firebaseprovider>
            <App />
         </Firebaseprovider>
    </ShopContextProvider>
   </BrowserRouter>
)
