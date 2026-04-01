import { useState } from 'react';
import FeatureCard from './Feature/FeatureCard';
import { toast } from 'react-toastify';
const PricingCard = ({pricing,inCart,setInCart}) => {
    console.log(pricing);
    const {name,description,price,tagType,features,icon,period}= pricing;
    const[isInCart,setIsInCart]=useState(false);
    const handleChooseProduct=()=>{
        toast(`${name} is add to cart`);
setIsInCart(true);
setInCart([...inCart,pricing])
    }
    
    return (
        <div className='flex flex-col gap-4 border-gray-300 border p-4 rounded-md h-full'>
            <button className={`rounded-2xl ${tagType=== "popular"?"bg-red-700 text-red-100":tagType=== "best seller"?"bg-green-950 text-white":"bg-blue-500 text-blue-100"} btn self-end`} >{tagType}</button> 
            <span>{icon}</span> 
            <h1 className="font-bold text-[20px]">{name}</h1>  <p>{description}</p> 
            <p><span className='font-bold text-[30px]'>${price}</span>/{period}</p>                            
             {features.split(",").map((feature, index) => (
  <FeatureCard key={index} feature={feature.trim()} />
))}
 <button className='btn  bg-linear-to-r from-violet-950 to-violet-600 text-white rounded-3xl ' onClick={handleChooseProduct}>{isInCart == true? "Added to Cart":"Buy Now"}</button>     

                      
        </div>
    );
};

export default PricingCard;