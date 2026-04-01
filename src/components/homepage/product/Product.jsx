
import AvailableProduct from './AvailableProduct/AvailableProduct';
import { Suspense } from 'react';
import { useState } from 'react';
import CartProducts from './cartProducts/cartProducts';
const Product = ({ pricingData,inCart,setInCart }) => {
    const[selected,setSelected]=useState("Available");
    // const[inCart,setInCart]=useState([])
console.log(selected,"selected")
    return (
        <div>
            <div className="hero bg-white my-20">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. <br /> Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi.
                        </p>
                        <div className='flex gap-2 item-center justify-center'>
                            <button onClick={() => setSelected("Available")}
                            className={`btn ${selected==="Available"?"bg-linear-to-r from-violet-950 to-violet-600 text-white":"bg-white text-violet-500"} rounded-2xl`}>Product</button>
                            <button onClick={() => setSelected("Cart")}
                             className={`btn ${selected==="Cart"?"bg-linear-to-r from-violet-950 to-violet-600 text-white":"bg-white text-violet-500"} rounded-2xl`}>Cart ({inCart.length})</button></div>

                    </div>
                    
                </div>
            </div>
            <div>{selected==="Available"?<AvailableProduct pricingData={pricingData} setInCart={setInCart} inCart={inCart}></AvailableProduct>:<CartProducts inCart={inCart} setInCart={setInCart} ></CartProducts>}</div>
            
        </div>
    );
};

export default Product;