import React, { useEffect, useState } from 'react';

import { GrFacebookOption, GrLinkedinOption, GrGithub, GrFacebook } from "react-icons/gr";
// import './Banner.css'
import { useTheme } from 'next-themes';

const Banner = () => {
    const { theme } = useTheme()


    return (
        <div>
            {
                theme === "dark" ?
                    <div className="darkBackgroundImage py-28 md:py-36 " >


                        <div className="hero">
                            <div className="hero-content flex-col md:flex-row-reverse justify-between">
                                <div className='relative'>
                                    <img src='https://github.com/LiptonBarua/My-Website-Client-Side/blob/main/src/assets/Image/LiptonDarkPic.jpg?raw=true' className="w-64  rounded-lg lg:ml-80  mb-0" alt='' />
                                </div>
                                <div>
                                    <h1 className="font-bold text-lg text-[#1bacef]">Hello, i'm</h1>
                                    <h1 className="text-4xl md:text-6xl font-bold text-white">Lipton Barua</h1>
                                    <div className='  mt-3 font-semibold text-white'>
                                        Creative Web Designer || Full-Stack-Developer || Front-End-Developer
                                    </div>
                                    <div className='mt-4'>
                                        <button className="text-[#1bacef] border border-[#1bacef] hover:bg-[#1bacef] hover:text-[#050312]  font-bold text-sm px-8 py-3 rounded-3xl outline-none  mr-1 mb-1 ease-linear transition-all duration-150" type="button">Hire Me</button>
                                        <a href='https://drive.google.com/file/d/19Hw0gRU5klDMeCKoxnHB7C1wm8A0lBJW/view?usp=sharing' download='Lipton Barua Resume.pdf'>   <button class="text-[#050312] border border-[#1bacef] hover:bg-[black] hover:text-[#1bacef] active:bg-[#1bacef] bg-[#1bacef] font-bold text-sm px-8 py-3 rounded-3xl  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Get Resume</button></a>
                                    </div>

                                    <div className='mt-3'>
                                        <div>
                                            <div className='flex'>

                                                <a href="https://www.linkedin.com/in/lipton-barua-2818b1259/" target='_blank' className='m-2 text-xl text-[#050312] bg-[#1bacef] p-1 rounded-full'><GrLinkedinOption></GrLinkedinOption></a>
                                                <a href="https://github.com/LiptonBarua" target='_blank' className='m-2 text-xl text-[#050312] bg-[#1bacef] p-1 rounded-full'><GrGithub></GrGithub></a>
                                                <a href="https://www.facebook.com/lipton.barua.33/" target='_blank' className='m-2 text-xl text-[#050312] bg-[#1bacef] p-1 rounded-full'><GrFacebookOption></GrFacebookOption></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    :
                    <div className="backgroundImage py-28 md:py-36 " >


                        <div className="hero">
                            <div className="hero-content flex-col md:flex-row-reverse justify-between">
                                <div className='relative'>
                                    <img src='https://github.com/LiptonBarua/My-Website-Client-Side/blob/main/src/assets/Image/Lipton.jpg?raw=true' className="w-64  rounded-lg lg:ml-80  mb-0" alt='' />
                                </div>
                                <div>
                                    <h1 className=" font-bold text-lg text-[navy]">Hello, i'm</h1>
                                    <h1 className="text-4xl md:text-6xl font-bold text-[#050312]">Lipton Barua</h1>
                                    <div className=' text-[#050312] mt-3 font-semibold'>
                                        Creative Web Designer || Full-Stack-Developer || Front-End-Developer
                                    </div>
                                    <div className='mt-4'>
                                        <button className="text-[navy] border border-[navy] hover:bg-[navy] hover:text-white  font-bold text-sm px-8 py-3 rounded-3xl outline-none  mr-1 mb-1 ease-linear transition-all duration-150" type="button">Hire Me</button>
                                        <a href='https://drive.google.com/file/d/19Hw0gRU5klDMeCKoxnHB7C1wm8A0lBJW/view?usp=sharing' download='Lipton Barua Resume.pdf' >   <button class="text-white border border-[navy] hover:bg-[#DDE4F8] hover:text-[navy] active:bg-[navy] bg-[navy] font-bold text-sm px-8 py-3 rounded-3xl  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Get Resume</button></a>
                                    </div>

                                    <div className='mt-3'>
                                        <div>
                                            <div className='flex'>

                                                <a href="https://www.linkedin.com/in/lipton-barua-2818b1259/" target='_blank' className='m-2 text-xl text-white bg-[navy] p-1 rounded-full'><GrLinkedinOption></GrLinkedinOption></a>
                                                <a href="https://github.com/LiptonBarua" target='_blank' className='m-2 text-xl text-white bg-[navy] p-1 rounded-full'><GrGithub></GrGithub></a>
                                                <a href="https://www.facebook.com/lipton.barua.33/" target='_blank' className='m-2 text-xl text-white bg-[navy] p-1 rounded-full'><GrFacebookOption></GrFacebookOption></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            }



        </div>
    );
};

export default Banner;