import React from 'react';
import './Style/Banner.css'

// banner with a background image
const Banner = () => {
    return (
        <div className='banner flex flex-col justify-center items-center'>
            <h2 className='banner-title text-5xl text-center font-serif text-white'>We Provide...</h2>
            <br />
            <h2 className='banner-title text-5xl text-center font-serif text-yellow-400'>The Best for Your Computer</h2>
        </div>
    );
};

export default Banner;