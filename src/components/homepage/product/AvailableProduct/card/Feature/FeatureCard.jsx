import React from 'react';
import { DiVim } from 'react-icons/di';
import { TiTick } from "react-icons/ti";
const FeatureCard = ({feature}) => {
    console.log(feature)
    return (
        <div className='flex'><TiTick className='text-green-500'/>  {feature}</div>
    );
};

export default FeatureCard;