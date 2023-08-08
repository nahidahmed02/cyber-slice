import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { FcGoogle } from 'react-icons/fc';
import useToken from '../../hooks/useToken';

// impliment login using react hook form

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    // login with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // login with google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (loading || gLoading) {
        return <Loading></Loading>
    }

    let signInError;

    if (error || gError) {
        signInError = <p className='font-bold text-red-500'>{error?.message || gError?.message}</p>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }


    return (
        <div className='flex my-14 justify-center items-center'>
            <div className="card w-80 lg:w-96 shadow-xl" style={{ backgroundColor: '#fffffe' }}>
                <div className="card-body">

                    <h2 className="text-center font-serif text-2xl font-bold" style={{ font: '#00214d' }}>Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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
                                        message: 'Please provide a valid Email'
                                    }
                                })}
                            />

                            {/* handle errors for email */}

                            <label className="label">
                                {
                                    errors.email?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500 font-bold">
                                        {errors.email.message}
                                    </span>
                                }

                                {
                                    errors.email?.type === 'pattern'
                                    &&
                                    <span className="label-text-alt text-red-500 font-bold">
                                        {errors.email.message}
                                    </span>
                                }
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
                                        message: 'Password should contain atleast 6 characters'
                                    }
                                })}
                            />

                            {/* handle errors for password */}

                            <label className="label">
                                {
                                    errors.password?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500 font-bold">
                                        {errors.password.message}
                                    </span>
                                }

                                {
                                    errors.password?.type === 'minLength'
                                    &&
                                    <span className="label-text-alt text-red-500 font-bold">
                                        {errors.password.message}
                                    </span>
                                }
                            </label>
                        </div>

                        {/* showing error */}
                        {signInError}

                        {/* login button */}
                        <input
                            className="btn w-full max-w-xs "
                            style={{ backgroundColor: '#00214d', color: 'white' }}
                            type="submit"
                            value='Login'
                        />
                    </form>


                    <p className='text-sm'>Don't have an account?
                        <Link
                            className='text-blue-600 ml-1'
                            to='/signup'
                        >
                            Create a new account
                        </Link>
                    </p>

                    <div className="divider text-xs">OR</div>

                    {/* google login button */}

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn bg-white hover:bg-gray-200"
                        style={{ color: '#00214d' }}
                    >
                        <FcGoogle className='text-xl mr-4' />
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;