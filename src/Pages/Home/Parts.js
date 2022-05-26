import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts();
    return (
        <div className='mx-8 lg:mx-20 mt-12 mb-16'>
            <h2 className='text-center text-3xl font-bold font-serif text-amber-500'>Parts We Provide</h2>
            <div className='grid lg:grid-cols-2 gap-8 mt-6'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;