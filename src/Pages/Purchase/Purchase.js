import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import usePart from '../../hooks/usePart';
import { toast, ToastContainer } from 'react-toastify';

const Purchase = () => {
    const [part] = usePart();
    const [user] = useAuthState(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const name = user.displayName;
    const email = user.email;

    const onSubmit = data => {
        data.parts = part.name;

        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order placed successfully!')
                reset()
            })
    };


    return (
        <div className='mx-8 lg:mx-20 mb-8'>

            <h2 className='underline text-center my-8 text-3xl font-bold font-serif text-amber-500'>
                Purchase -<span className='text-violet-700 italic ml-1'> {part.name}</span>
            </h2>


            <div className='grid grid-cols-1 lg:grid-cols-2'>

                {/* showing the part in a card */}
                <div className="card lg:w-96 shadow-xl bg-sky-200">
                    <figure className="px-10 pt-10">
                        <img src={part.photo} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-start">
                        <h2 className="card-title font-bold font-serif ml-2">Name: {part.name}</h2>
                        <p className='italic ml-2'><span className='font-bold'>Id</span>: {part._id}</p>
                        <p className='italic ml-2'><span className='font-bold'>Description</span>: {part.description}</p>
                        <p className='italic ml-2'><span className='font-bold'>Available Quantity</span>: {part.available}</p>
                        <p className='italic ml-2'><span className='font-bold'>Minimum Order Quantity</span>: {part.minOrder}</p>
                        <p className='italic ml-2'><span className='font-bold'>Price Per Unit</span>: {part.price}</p>
                    </div>
                </div>

                {/* form for placing the order */}
                <div>
                    <div className='card my-6 lg:my-0 shadow-2xl'>

                        <div className='card-body'>
                            <h2 className='text-center my-4 text-3xl font-bold font-serif text-blue-500'>Place Order Form</h2>

                            <form className='text-center lg:mx-32' onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input
                                        {...register("name")}
                                        type="text"
                                        value={name}
                                        className='input input-bordered w-full max-w-xs'
                                        readOnly />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        value={email}
                                        className='input input-bordered w-full max-w-xs'
                                        readOnly />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Parts Name</span>
                                    </label>
                                    <input
                                        {...register("parts")}
                                        type="text"
                                        name="parts"
                                        value={part.name}
                                        className='input input-bordered w-full max-w-xs'
                                        readOnly
                                    />

                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-bold">Quantity: Min {part.minOrder}, Max {part.available}</span>
                                    </label>
                                    <input
                                        {...register("quantity", { min: part.minOrder, max: part.available })}
                                        type="number"
                                        name="quantity"
                                        placeholder="Order Quantity"
                                        className='input input-bordered w-full max-w-xs'
                                    />

                                    {errors.quantity && errors.quantity.type === "min" && (
                                        <span className='text-error font-bold italic'>
                                            You can't order less than the minimum order quantity
                                        </span>
                                    )}

                                    {errors.quantity && errors.quantity.type === "max" && (
                                        <span className='text-error font-bold italic'>
                                            You can't order more than the available quantity
                                        </span>
                                    )}
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label>
                                    <input
                                        {...register("address")}
                                        type="text"
                                        name='address'
                                        placeholder='Your Address'
                                        className='input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        name='phone'
                                        placeholder='Phone Number'
                                        className='input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                {
                                    (errors.quantity < 'min' || errors.quantity > 'max')
                                        ?
                                        <input
                                            type="submit"
                                            value="Place Order"
                                            className='btn btn-info btn-sm text-white font-bold btn-disabled w-full max-w-xs mt-4'
                                        />
                                        :
                                        <input
                                            type="submit"
                                            value="Place Order"
                                            className='btn btn-info btn-sm text-white font-bold w-full max-w-xs mt-4'
                                        />
                                }
                            </form>
                        </div>
                    </div>

                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default Purchase;