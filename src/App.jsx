

import './App.css'
import Navbar from './components/homepage/navbar/Navbar'
import Banner from './components/homepage/banner/banner'
import Start from './components/homepage/Start/Start'
import Product from './components/homepage/product/Product'
import { ToastContainer} from 'react-toastify';
import { use } from 'react'
import { useState } from 'react'
import StepSection from './components/homepage/StepSection/StepSection'
import PriceSection from './components/homepage/PricingSection/PriceSection'
import Footer from './components/homepage/Footer/Footer'
const pricingPromise= fetch('/product.json').then(res => res.json());

function App() {
 const pricingData = use(pricingPromise);
const[inCart,setInCart]= useState([])

  return (
    <><div ><Navbar inCart={inCart} ></Navbar>
      <main className='my-1 mx-auto'><Banner></Banner>
      <Start></Start>
      <Product pricingData={pricingData} inCart={inCart} setInCart={setInCart}></Product>
      <StepSection></StepSection>
      <PriceSection></PriceSection>
      <Footer></Footer></main></div>
      <ToastContainer />
    </>
  )
}

export default App
