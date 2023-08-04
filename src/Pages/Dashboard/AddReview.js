import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const name = user.displayName;

    const onSubmit = data => {
        const url = `https://cyber-slice-server.onrender.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Review sent!')
                reset()
            })
    };
    return (
        <div>
            <h2 className='underline text-center text-2xl font-bold font-serif mt-6 mb-3 lg:mr-14' style={{ font: '#00214d' }}>Add A Review</h2>

            <div className='flex justify-center items-center '>
                <form className='text-center w-96' onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>

                        <input
                            {...register("name")}
                            type="text"
                            value={name}
                            className='input input-bordered w-full max-w-xs'
                            readOnly
                        />
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Your Feedback</span>
                        </label>

                        <textarea
                            {...register("feedback")}
                            type="text"
                            name="feedback"
                            placeholder="Feedback"
                            className='input input-bordered w-full max-w-xs'
                        />
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text font-bold">Ratings (1-5)</span>
                        </label>

                        <input
                            {...register("rating", { min: 1, max: 5 })}
                            type="number"
                            name="rating"
                            placeholder="Rating"
                            className='input input-bordered w-full max-w-xs'
                            required
                        />
                        {errors.rating && "Rating should be between 1-5"}
                    </div>

                    <input
                        type="submit"
                        value="Send Review"
                        className='btn btn-info btn-sm text-white font-bold w-full max-w-xs mt-4'
                    />
                </form>
            </div>
        </div>
    );
};

export default AddReview;