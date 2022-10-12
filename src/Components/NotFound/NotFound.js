import React from 'react';
import './notFound.css'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-mono font-bold text-xl text-red-600 mt-10'>Data not found</h1>
            <img className='not-found-image' src="/images/2.png" alt="" srcset="" />
        </div>
    );
};

export default NotFound;