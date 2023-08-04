import React from 'react';
import notFound from '../../images/404.jpg';

// ---------- 404 page -------------
const NotFound = () => {
    return (
        <div className='text-center mx-20 my-6'>
            <img
                className='lg:mx-32'
                src={notFound}
                alt=""
            />
        </div>
    );
};

export default NotFound;