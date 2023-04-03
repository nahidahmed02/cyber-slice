import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, photo, name, description, available, minOrder, price } = part;

    const navigate = useNavigate();

    const handleNavigate = id => {
        navigate(`/parts/${id}`)
    }

    return (
        <div className="card lg:card-side bg-sky-100 shadow-xl grid lg:grid-cols-3 lg:pl-8">
            <figure className='lg:col-span-1'>
                <img src={photo} alt="" />
            </figure>
            <div className="card-body lg:col-span-2 pb-4 pt-6 pr-5">
                <h2 className="card-title text-base font-bold font-serif">Name: {name}</h2>
                <p className='italic text-sm'><span className='font-bold'>Description</span>: {description}</p>
                <p className='italic text-sm'><span className='font-bold'>Available Quantity</span>: {available}</p>
                <p className='italic text-sm'><span className='font-bold'>Minimum Order Quantity</span>: {minOrder}</p>
                <p className='italic text-sm'><span className='font-bold'>Price Per Unit</span>: $ {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleNavigate(_id)} className="btn glass btn-sm bg-white text-amber-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;