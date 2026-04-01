import React from 'react';
import { use } from 'react';
import PricingCard from './card/PricingCard';
const AvailableProduct = ({setInCart,inCart,pricingData}) => {
    console.log(inCart)
//    const pricingData = use(pricingPromise);
        console.log(pricingData.length)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-20'>
            {
                pricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing} inCart={inCart} setInCart={setInCart}></PricingCard>)
            }
        </div>
    );
};

export default AvailableProduct;