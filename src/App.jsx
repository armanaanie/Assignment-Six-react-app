

import './App.css'
import Navbar from './components/homepage/navbar/Navbar'
import Banner from './components/homepage/banner/banner'
import Start from './components/homepage/Start/Start'
import Product from './components/homepage/product/Product'
import { ToastContainer} from 'react-toastify';
import { use } from 'react'
import { useState } from 'react'
const pricingPromise= fetch('/public/product.json').then(res => res.json());

function App() {
 const pricingData = use(pricingPromise);
const[inCart,setInCart]= useState([])

  return (
    <><div className=' '><Navbar inCart={inCart} ></Navbar>
      <Banner></Banner>
      <Start></Start>
      <Product pricingData={pricingData} inCart={inCart} setInCart={setInCart}></Product></div>
      <ToastContainer />
    </>
  )
}

export default App
