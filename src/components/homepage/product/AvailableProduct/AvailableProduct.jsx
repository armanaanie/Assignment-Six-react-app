import React from 'react';
import { use } from 'react';
import PricingCard from './card/PricingCard';
const AvailableProduct = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    console.log(pricingData.length)
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-20'>
            {
                pricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            }
        </div>
    );
};

export default AvailableProduct;