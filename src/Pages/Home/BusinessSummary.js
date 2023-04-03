import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import { GiProgression } from 'react-icons/gi';
import { MdRateReview } from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div className='mt-8 mb-5 mx-20'>
            <h2 className='text-center mb-11 text-3xl font-bold font-serif text-amber-500 underline'>Business Summary</h2>
            <div className='text-center grid grid-cols-2 lg:grid-cols-4 mb-9'>

                <div className='flex flex-col items-center'>
                    <span><GiProgression className='text-6xl' /></span>

                    <span className='text-3xl font-bold mt-2 text-green-700'>92%</span>

                    <span className='font-extrabold font-mono'>Success Rate</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span><GrMoney className='text-6xl' /></span>

                    <span className='text-3xl font-bold mt-2 text-green-700'>130M+</span>

                    <span className='font-extrabold font-mono'>Annual Revenue</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span><FaGlobe className='text-6xl' /></span>

                    <span className='text-3xl font-bold mt-2 text-green-700'>85</span>

                    <span className='font-extrabold font-mono'>Countries We Are Serving</span>
                </div>

                <div className='flex flex-col items-center'>
                    <span><MdRateReview className='text-6xl' /></span>

                    <span className='text-3xl font-bold mt-2 text-green-700'>50K+</span>

                    <span className='font-extrabold font-mono'>Reviews</span>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;