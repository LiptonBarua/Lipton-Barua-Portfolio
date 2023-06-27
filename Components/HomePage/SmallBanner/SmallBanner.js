import { useTheme } from 'next-themes';
import React from 'react';
const SmallBanner = () => {
    const{theme} = useTheme()
    return (
        <div>
            {
                theme==='dark' ?  
                <div className='darkBannerDesign mb-28 pt-8 md:pt-0'>
                <div className="px-16 h-44 text-[#050312] md:flex items-center md:justify-between">
                    <h1 className="text-2xl font-bold hidden md:flex">Are you ready to hire me for <br></br> your next Project ?</h1>
                    <h1 className="text-2xl font-bold block md:hidden">Are you ready to hire me for your next Project ?</h1>
                    <a href='#contact'><button className="text-[#050312] border mt-5 md:mt-0   border-[#050312] hover:bg-[#050312] hover:text-[white] active:bg-[#050312] font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Contact Me</button></a>
                </div>
            </div>
            :
            <div className='bannerDesign mb-28 pt-8 md:pt-0'>
            <div className="px-16 h-44 text-white md:flex items-center md:justify-between">
                <h1 className="text-2xl font-bold hidden md:flex">Are you ready to hire me for <br></br> your next Project ?</h1>
                <h1 className="text-2xl font-bold block md:hidden">Are you ready to hire me for your next Project ?</h1>
                <a href='#contact'><button className="text-white border mt-5 md:mt-0   border-white hover:bg-[#f8f1f1] hover:text-[#11113d] active:bg-white font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Contact Me</button></a>
            </div>
        </div>
            }
       
        </div>
    );
};

export default SmallBanner;