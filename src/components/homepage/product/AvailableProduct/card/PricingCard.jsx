import React from 'react';
import Writing from "../../../../../assets/products/writing_2327400 1.png"
import FeatureCard from './Feature/FeatureCard';
const PricingCard = ({pricing}) => {
    console.log(pricing)
    const {name,description,price,tagType,features,icon}= pricing;
    return (
        <div className='flex flex-col gap-4 border-gray-300 border p-4 rounded-md h-full'>
            <button className=' rounded-2xl bg-amber-200 text-amber-800 btn self-end'>{tagType}</button> 
            <span>{icon}</span> 
            <h1 className="font-bold text-[20px]">{name}</h1>  <p>{description}</p> 
            <p><span className='font-bold text-[30px]'>${price}</span>/Mo</p>                             {features.split(",").map((feature, index) => (
  <FeatureCard key={index} feature={feature.trim()} />
))} <button className='btn  bg-linear-to-r from-violet-950 to-violet-600 text-white rounded-3xl '>Buy Now</button>     

                      
        </div>
    );
};

export default PricingCard;