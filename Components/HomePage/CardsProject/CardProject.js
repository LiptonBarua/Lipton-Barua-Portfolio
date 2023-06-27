import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';


const CardProject = ({ card }) => {
   const {_id, website_name, website, image1, githubClient, githubServer} = card;

   useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);

   console.log(image1)
    return (
        <div data-aos="fade-right">
            <div className="card card-compact bg-base-100 dark:bg-[#0f0a03] shadow-3xl ">
                <figure><img src={image1} alt="" /></figure>
                <div className="card-body my-6">
                    <h2 className="card-title dark:text-white">{website_name}</h2>
                    <a href={website} target="_blank"> <button className="bg-[navy] text-white dark:bg-[#1bacef] dark:text-[#050312] py-2 px-3 w-full">Live Site</button></a>
                  
                    <div className="flex justify-between ">
                        <a href={githubClient}> <button className="bg-[navy] text-white dark:bg-[#1bacef] dark:text-[#050312] py-2 px-3 w-full">Github Client</button></a>
                        <a href={githubServer}> <button className="bg-[navy] text-white dark:bg-[#1bacef] dark:text-[#050312] py-2 px-3 w-full">Github Server</button></a>
                        
                    </div>
                    {/* <Link to={`/product/${_id}`}><button className="bg-[navy] text-white py-2 px-3 w-full">Project Details</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default CardProject;