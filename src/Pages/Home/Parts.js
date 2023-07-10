import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';
import Loading from '../Shared/Loading';

const Parts = () => {
    const [parts] = useParts();
    return (
        <div className='mx-8 lg:mx-20 mt-12 mb-16'>
            <h2 className='text-center underline text-3xl font-bold font-serif text-amber-500'>Parts We Provide</h2>
            {
                parts?.length === 0 && <Loading></Loading>
            }
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