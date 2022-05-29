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
        fetch(`https://hidden-fortress-98551.herokuapp.com/profile?email=${email}`)
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
        const url = `https://hidden-fortress-98551.herokuapp.com/profile/${email}`;
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
            <h2 className='text-center text-2xl font-bold font-serif text-violet-500 mt-6'>{user.displayName}'s Profile</h2>

            <div className='my-3'>
                <h2 className='text-center text-xl'>Name: {name} </h2>
                <h2 className='text-center text-xl'>Email: {email} </h2>
                <h2 className='text-center text-xl'>Education: {profile?.education} </h2>
                <h2 className='text-center text-xl'>Location: {profile?.location} </h2>
                <h2 className='text-center text-xl'>Phone: {profile?.phone} </h2>
                <h2 className='text-center text-xl'>Linkedin Id: {profile?.linkedin} </h2>
            </div>

            <div className='text-center'>
                <form onSubmit={handleUpdateUser}>
                    <input type="text" name='education' placeholder='Education' required />
                    <br />
                    <input type="text" name='location' placeholder='Location' required />
                    <br />
                    <input type="text" name='phone' placeholder='Phone' required />
                    <br />
                    <input type="text" name='linkedin' placeholder='Linkedin Id' required />
                    <br />
                    <input type="submit" value="Update User" className='btn btn-info' />
                </form>
            </div>

        </div>
    );
};

export default MyProfile;