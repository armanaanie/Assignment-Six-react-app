import React from 'react';
import BannerImg from "../../../assets/banner.png"
import play from "../../../assets/Play.png"
import { FaDotCircle } from "react-icons/fa";
const Banner = () => {
    return (
        
         <div className="hero bg-white min-h-screen mt-10 py-10">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='flex flex-col gap-2.5'>
        <button className='badge rounded-xl bg-violet-500 text-white'><FaDotCircle /> New:AI powered tool available</button>
      <h1 className="text-5xl font-bold">Supercharge Your <br />
Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity
<br />
software—all in one place. Start creating faster today.

<br />
Explore Products

      </p>
      <div className='flex gap-2.5'><button className="btn btn-primary rounded-2xl">Get Started</button><button className="btn btn-outline border-violet-500 text-violet-500 rounded-2xl"><img src={play}></img>Get Started now</button></div>
    </div>
  </div>
</div>   
        
    );
};

export default Banner;