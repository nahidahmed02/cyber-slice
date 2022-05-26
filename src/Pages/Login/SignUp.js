import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (user || gUser) {
        navigate('/');
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }


    return (
        <div className='flex my-14 justify-center items-center'>
            <div className="card w-96 bg-sky-100 shadow-xl">
                <div className="card-body">

                    <h2 className="text-center font-serif text-2xl text-amber-400 font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* user name input field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />

                            {/* error for name */}
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt font-bold text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        {/* email input field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                            {/* error for email */}
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt font-bold text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt font-bold text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* password input field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Please set the password atleast of 6 characters'
                                    }
                                })}
                            />

                            {/* error for password */}
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt font-bold text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt font-bold text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* showing errors */}
                        {signInError}

                        {/* signup button */}
                        <input className="btn bg-green-600 w-full max-w-xs text-white" type="submit" value='Sign Up' />
                    </form>

                    <p>Already have an account? <Link className='text-blue-600' to='/login'> Login</Link></p>

                    <div className="divider">OR</div>

                    {/* google login button */}
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn bg-white text-blue-600"
                    > <FcGoogle className='text-xl mr-4' /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;