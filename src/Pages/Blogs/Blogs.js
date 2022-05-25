import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-8 lg:mx-20 my-12'>
            <div className='card-bordered rounded-xl bg-gray-200 lg:px-20 lg:py-4 mb-4'>
                <h2 className='text-2xl font-bold text-red-500'>How will you improve the performance of a React Application?</h2>
                <p className='text-xl font-bold mt-2'>There are many ways to improve the performance of a React Application. Such as: <br />
                    <span className='ml-10'>1. By using Immutable Data Structures,</span> <br />
                    <span className='ml-10'>2. For maping avoid using Index as a Key,</span> <br />
                    <span className='ml-10'>3. Using a CDN to deliver static content,</span> <br />
                    <span className='ml-10'>4. Avoiding unnecessary renders,</span> <br />
                    <span className='ml-10'>5. Avoiding Anonymous Functions</span> <br />
                </p>
            </div>


        </div>
    );
};

export default Blogs;