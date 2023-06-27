import React, { useEffect, useState } from 'react';
import CardProject from './CardProject';

const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://assianment-protfolio-server.vercel.app/product')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className='px-4 lg:px-0 my-24 lg:max-w-[90%] mx-auto'>
            <h1 className='uppercase text-xl text-[navy] dark:text-[#1bacef] font-semibold'>My Works</h1>
            <h2 className='text-2xl font-bold text-[#050312] dark:text-white'>Latest Project</h2>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                {
                    cards?.map(card => <CardProject key={card._id} card={card}></CardProject>)
                }
            </div>
        </div>
    );
};

export default Cards;