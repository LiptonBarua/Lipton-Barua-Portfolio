import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
// import { Player } from '@lottiefiles/react-lottie-player';



const EmailContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wbch8yl', 'template_gwmk065', form.current, 'Mwbeb29rmiwI4XusA')
            .then((result) => {
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            });
            
        e.target.reset();
        toast.success('message success')
    }
    return (
        <div className='bg-[#e6ebf6] dark:bg-[#08051d] py-20' id='contact'>
           <section className="py-6  dark:text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
		<div className="py-6 md:py-0 md:px-6">
            <p className="pt-2 pb-4 text-[navy] dark:text-[#1bacef] text-xl font-bold">Contact Me</p>
			<h1 className="text-4xl text-[#050312] dark:text-white pb-4 font-bold">Get in Touch</h1>
			<div className="space-y-4">
                	<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801638776808</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>liptonbarua274@gmail.com</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Kadalpur, Raozan, Chittagong, Bangladesh</span>
				</p>
			
			</div>
		</div>
        <form ref={form} onSubmit={sendEmail}>
                                <div className=''>
                                    <div>
                                        <p>Name</p>
                                        <input className='block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ' type="text" name='user_name' placeholder="Name" required />
                                    </div>
                                    <div className='my-2'>
                                        <p>Email</p>
                                        <input className='block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ' type="email" name='user_email' placeholder="Email" required />
                                    </div>

                                    <div className='mb-2'>
                                        <p>Phone</p>
                                        <input className='block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ' type="phone" name="user_phone" placeholder="Phone" required />
                                    </div>
                                    <div>
                                        <p>Message</p>
                                        <textarea className='block w-full pl-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 ' rows="4" name='message' placeholder="Message" required></textarea>
                                    </div>
                                    <div className='mt-3'>
                                        <button className='text-white border border-[navy] bg-[navy] dark:border-[#1bacef] dark:bg-[#1bacef] dark:text-[#050312] font-bold uppercase text-xs px-7 py-3 rounded  mr-1 mb-1'>Submit</button>

                                    </div>

                                </div>
                            </form>
	</div>
</section>
        </div>
    );
};

export default EmailContactForm;

