import React from 'react';
import User from "../../../assets/user.png"
const StepSection = () => {
    return (
        <div className='flex flex-col gap-2 my-20'><div className='flex flex-col items-center'><h1 className='font-bold text-[30px]'>Get Started in 3 steps</h1>
            <p className='font-extralight text-[12px]'>Start using premium digital tools in minutes, not hours.</p>
            <div className='flex gap-3 items-center justify-between mt-10'><div className='flex flex-col gap-2 items-center bg-violet-50 rounded-md p-4'><button className='btn self-end bg-linear-to-r from-violet-950 to-violet-600 text-white rounded-full'>01</button><img src={User} className="bg-violet-100 rounded-full p-2" alt="" /><h3 className='font-bold text-[18px]'>Create Account</h3><p className='font-extralight text-[12px]'>Sign up for free in seconds. No credit card required to get started.</p></div><div className='flex flex-col gap-2 items-center bg-violet-50 rounded-md p-4'><button className='btn self-end bg-linear-to-r from-violet-950 to-violet-600 text-white rounded-full'>01</button><img src={User} className="bg-violet-100 rounded-full p-2" alt="" /><h3 className='font-bold text-[18px]'>Create Account</h3><p className='font-extralight text-[12px]'>Sign up for free in seconds. No credit card required to get started.</p></div><div className='flex flex-col gap-2 items-center bg-violet-50 rounded-md p-4'><button className='btn self-end bg-linear-to-r from-violet-950 to-violet-600 text-white rounded-full'>01</button><img src={User} className="bg-violet-100 rounded-full p-2" alt="" /><h3 className='font-bold text-[18px]'>Create Account</h3><p className='font-extralight text-[12px]'>Sign up for free in seconds. No credit card required to get started.</p></div></div></div>

        </div>
    );
};

export default StepSection;