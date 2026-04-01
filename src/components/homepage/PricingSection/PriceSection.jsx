import React from 'react';
import { TiTick } from "react-icons/ti";
const PriceSection = () => {
    return (
        <div className='flex flex-col gap-15 items-center my-20'>
            <div className='flex flex-col gap- items-center'>
                <h1 className='font-bold text-[30px]'>Simple, Transparent Pricing</h1><p className='font-extralight text-[12px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p></div>
            <div className='grid grid-col-1 md:grid-cols-3 gap-5  '>
                <div className='flex flex-col bg-violet-50 rounded-md gap-2 p-4 h-75'>
                    <h3 className='font-bold text-[20px]'>Basic Plan</h3><p>Perfect for beginners who want to get started.</p>
                    <p><span className='font-bold text-[18px]'>$10</span>/Mo</p>
                    <div className=''><ul>
                        <li className='flex gap-1'><TiTick className='text-green-700' />Access to basic tutorials</li>
                        <li className='flex gap-1'><TiTick className='text-green-700' />5 Projects</li>
                        <li className='flex gap-1'><TiTick className='text-green-700' />Community support</li>
                    </ul>
                    <button className='btn  bg-linear-to-r from-violet-950 to-violet-600 text-white rounded-3xl w-full mt-15 ' >Get Started Free</button></div>
                </div>

                <div className='flex flex-col gap-2 bg-violet-900 text-white p-4 rounded-md relative h-75'>
                    <button className='badge bg-amber-200 text-amber-900 absolute -top-3 left-25'>Most popular</button>
                    <h3 className='font-bold text-[20px]'>Standard Plan</h3><p>Ideal for regular users with more features.</p>
                    <p><span className='font-bold text-[18px]'>$20</span>/Mo</p>
                    <ul>
                        <li className='flex gap-1'><TiTick className='text-green-700' />Access to basic tutorials</li>
                        <li className='flex gap-1'><TiTick className='text-green-700' />20 Projects</li>
                        <li className='flex gap-1'><TiTick className='text-green-700' />Monthly webinars</li>
                    </ul>
                    <button className='btn  text-violet-800 bg-white rounded-3xl w-full mt-14' >Start Pro trail</button>
                </div>
                <div className='flex flex-col bg-violet-50 rounded-md gap-2 p-4 h-75'>
                    <h3 className='font-bold text-[20px]'>Premium Plan</h3><p>For professionals who need full access.</p>
                    <p><span className='font-bold text-[18px]'>$50</span>/Mo</p>
                    <ul>
                        <li className='flex gap-1'><TiTick className='text-green-700' />Unlimited tutorials</li>
                        <li className='flex gap-1'><TiTick className='text-green-700' />Unlimited projects</li>
                        <li className='flex gap-1'><TiTick className='text-green-700' />Priority support</li>
                    </ul>
                    <button className='btn  bg-linear-to-r from-violet-950 to-violet-600 text-white rounded-3xl w-full mt-15' >Contact sales</button>
                </div>
            </div>
        </div>
    );
};

export default PriceSection;