import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://cyber-slice-server.onrender.com/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Parts added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add this parts')
                }
            })
    }


    return (
        <div>
            <h2 className='underline text-center text-2xl font-bold font-serif mt-6 lg:mr-14' style={{ font: '#00214d' }}>Add A Product</h2>

            <div className='flex mt-4 justify-center items-center '>
                <form className='text-center w-96 mb-6' onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Parts Name</span>
                        </label>

                        <input
                            {...register("name")}
                            type="text"
                            placeholder='Parts Name'
                            className='input input-bordered w-full  mx-auto'
                            required
                        />
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>

                        <textarea
                            {...register("description")}
                            type="text"
                            placeholder="Description"
                            className='input input-bordered w-full max-w-xs'
                            required
                        />
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>

                        <input
                            {...register("price")}
                            type="number"
                            placeholder="Price"
                            className='input input-bordered w-full max-w-xs'
                            required
                        />
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>

                        <input
                            {...register("available")}
                            type="number"
                            placeholder="Available Quantity"
                            className='input input-bordered w-full max-w-xs'
                            required
                        />
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text font-bold">Minimum Order</span>
                        </label>

                        <input
                            {...register("minOrder")}
                            type="number"
                            placeholder="Minimum Order"
                            className='input input-bordered w-full max-w-xs'
                            required
                        />
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>

                        <input
                            {...register("photo")}
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        value="Add"
                        className='btn btn-info btn-sm text-white font-bold w-full max-w-xs mt-4'
                    />

                </form>

            </div>
        </div>
    );
};

export default AddProduct;