import React from 'react';
import techFair from '../../images/techfair.jpg'
import './Style/TechFair.css'

const TechFair = () => {
    return (
        <div className='lg:mx-20 my-10 p-6 flex items-center card-bordered bg-blue-600 rounded tech-div'>
            <div className='tech-title'>
                <p className='text-xl p-4 text-white'>A grand tech fair will be held soon at McGill University. Cyber Slice will be there too.</p>
                <p className='text-xl p-4 text-white'>So... See you soon!</p>
            </div>
            <div className='tech-img'>
                <img className='rounded p-4' src={techFair} alt="" />
            </div>
        </div>
    );
};

export default TechFair;