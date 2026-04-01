import React from 'react';

const Start = () => {
    return (
       <div className='bg-linear-to-r from-violet-950 to-violet-600 mt-10 p-10'><div className="flex w-full flex-col lg:flex-row  text-white ">
  <div className="card  rounded-box grid h-22 grow place-items-center"><div className='flex flex-col items-center'><h1 className='font-extrabold text-[40px] '>50k +</h1><p>Active users</p></div></div>
  <div className="divider  before:bg-white after:bg-white lg:divider-horizontal"></div>
  <div className="card rounded-box grid h-22 grow place-items-center"><div className='flex flex-col items-center'><h1 className='font-extrabold text-[40px] '>200k +</h1><p>Premium Tools</p></div></div>
  <div className="divider lg:divider-horizontal before:bg-white after:bg-white "></div>
  <div className="card rounded-box grid h-22 grow place-items-center"><div className='flex flex-col items-center'><h1 className='font-extrabold text-[40px] '>4.9</h1><p>Ratings</p></div></div>
</div></div>
            
        
    );
};

export default Start;