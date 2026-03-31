

import './App.css'
import Navbar from './components/homepage/navbar/Navbar'
import Banner from './components/homepage/banner/banner'
import Start from './components/homepage/Start/Start'
import Product from './components/homepage/product/Product'
const pricingPromise= fetch('/public/product.json').then(res => res.json());

function App() {


  return (
    <><div className=' '><Navbar></Navbar>
      <Banner></Banner>
      <Start></Start>
      <Product pricingPromise={pricingPromise}></Product></div>
      
    </>
  )
}

export default App
