import React from 'react';
import './Style/Campaign.css'

const Campaign = () => {
    return (
        <div className='campaign text-center my-10'>

            <div className='pt-8 lg:pt-28 lg:px-32'>
                <p className='campaign-title text-yellow-400 text-5xl font-bold'>Join us and plant a tree</p>
                <p className='campaign-text text-white text-2xl font-bold mt-2 lg:mt-4 mb-3 lg:mb-5'>
                    Cyber Slice is joining Jane's Green Hope along with the Arbor Day Foundation to help bring forests back to life.
                </p>

                <a
                    href="https://janegoodall.org/make-a-difference/janes-green-hope/"
                    className='btn btn-warning beating text-white font-bold'
                >
                    Details
                </a>

            </div>

        </div>
    );
};

export default Campaign;