import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const About = () => {
    return (
        <div className='pt-0 md:pt-16 lg:max-w-[92%] lg:mx-auto' id='about' >

            <div className="hero">
                <div className="hero-content flex-col md:flex-row items-center">
                    <Player className='md:w-[400px]'
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_s2vaal7n.json"></Player>
                    <div className='md:ml-40 dark:text-white'>

                        <h1 className="text-xl font-bold text-[navy] dark:text-[#1bacef]">About Us</h1>
                        <h2 className='font-bold text-xl md:text-2xl'>I am Creative <span className=''>Full Stack Developer</span></h2>
                        <p className="py-6 text-justify dark:text-gray-300">I am a full stack developer. I can provide clean code and pixel perfect designs. I make the website more interactive with web animations. I can provide clean code and pixel perfect designs. I also make the website more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their devices</p>
                        {/* <Link to='/'><button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-yellow-500 text-[#050312]">Get Started</button></Link> */}
                        <div>
                        
                            <a href='Full Stack-Developer CV.pdf' download='Full Stack-Developer CV.pdf'><button className="text-[navy] border border-[navy] hover:bg-[navy] hover:text-white dark:text-[#1bacef] dark:border-[#1bacef] dark:hover:bg-[#1bacef] dark:hover:text-[#050312] font-bold uppercase text-xs px-4 py-3 rounded outline-none  mr-1 mb-1 ease-linear transition-all duration-150" type="button">Download CV</button></a>
                            <a href='Lipton Barua Full-Stack-Developer Resume.pdf' download='Lipton Barua Full-Stack-Developer Resume.pdf'><button className="text-[navy] border border-[navy] hover:bg-[navy] hover:text-white dark:text-[#1bacef] dark:border-[#1bacef] dark:hover:bg-[#1bacef] dark:hover:text-[#050312] font-bold uppercase text-xs px-4 py-3 rounded outline-none  ml-1 mb-1 ease-linear transition-all duration-150" type="button">Download Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;