import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const MyProfile = () => {

    const { register, handleSubmit, reset } = useForm();

    const [user] = useAuthState(auth);
    const name = user.displayName;
    const email = user.email;

    const [profile, setProfile] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/profile?email=${email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])



    const onSubmit = data => {
        const url = `http://localhost:5000/profile`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Profile Saved!')
                reset()
            })


    };
    return (
        <div>
            <h2 className='text-center text-2xl font-bold font-serif text-violet-500 mt-6'>{user.displayName}'s Profile</h2>


            {/* <div className='flex mt-4 justify-center items-center mx-2 lg:mx-auto'>
                        <form className='text-center lg:w-96' onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Your Name</span>
                                </label>
                                <input {...register("name")} type="text" value={name} className='input input-bordered w-full max-w-xs' lebel readOnly />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Your Email Address</span>
                                </label>
                                <input {...register("email")} type="text" value={email} className='input input-bordered w-full max-w-xs' lebel readOnly />
                            </div>

                            <br />

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Educational Background</span>
                                </label>
                                <input {...register("school")} type="text" name="school" placeholder="School" className='input input-bordered w-full max-w-xs' />
                                <input {...register("college")} type="text" name="college" placeholder="College" className='input input-bordered w-full max-w-xs' />
                                <input {...register("university")} type="text" name="university" placeholder="University" className='input input-bordered w-full max-w-xs' />
                            </div>

                            <br />

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">City/District <small> (required)</small></span>
                                </label>
                                <input {...register("location")} type="text" name="location" placeholder="Location" className='input input-bordered w-full max-w-xs' required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Phone Number</span>
                                </label>
                                <input {...register("phone")} type="text" name="phone" placeholder="Phone Number" className='input input-bordered w-full max-w-xs' />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Linkedin Profile Link</span>
                                </label>
                                <input {...register("link")} type="link" name="link" placeholder="Link" className='input input-bordered w-full max-w-xs' />
                            </div>

                            <input type="submit" value="Save Info" className='btn btn-info w-full max-w-xs mt-4 mr-16' />

                        </form>
                    </div> */}





        </div>
    );
};

export default MyProfile;