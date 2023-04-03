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
        fetch(`https://cyber-slice-server.onrender.com/profile?email=${email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])

    const handleUpdateUser = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const location = event.target.location.value;
        const education = event.target.education.value;
        const linkedin = event.target.linkedin.value;

        const UpdatedUser = { name, email, location, education, linkedin };

        // send data to the server
        const url = `https://cyber-slice-server.onrender.com/profile/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UpdatedUser),
        })
            .then(res => res.json())
            .then(data => {
                toast('Profile updated successfully');
                event.target.reset();
            })
    }



    return (
        <div>
            <h2 className='underline text-center text-2xl font-bold font-serif text-violet-500 mt-6 mb-3'>{user.displayName}'s Profile</h2>

            <div className='mb-3 mx-64 px-24 py-10 rounded-md bg-sky-100'>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Name:</span> {name} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Email:</span> {email} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Education:</span> {profile?.education} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Location:</span> {profile?.location} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Phone:</span> {profile?.phone} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Linkedin Id:</span> {profile?.linkedin} </h2>
            </div>

            <div className='flex mt-4 justify-center items-center mx-2 lg:mx-auto'>
                <form onSubmit={handleUpdateUser} className='text-center lg:w-96'>
                    <input type="text" name='education' placeholder='Education' className='input input-bordered w-full max-w-xs' required />
                    <br />
                    <input type="text" name='location' placeholder='Location' className='input input-bordered w-full max-w-xs mt-1' required />
                    <br />
                    <input type="text" name='phone' placeholder='Phone' className='input input-bordered w-full max-w-xs mt-1' required />
                    <br />
                    <input type="text" name='linkedin' placeholder='Linkedin Id' className='input input-bordered w-full max-w-xs mt-1' required />
                    <br />
                    <input type="submit" value="Update User" className='btn btn-sm btn-info text-white font-bold w-full max-w-xs mt-3' />
                </form>
            </div>

        </div>
    );
};

export default MyProfile;