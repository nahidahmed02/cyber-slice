import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const MyProfile = () => {

    const { register, reset, handleSubmit } = useForm();

    const [profile, setProfile] = useState();
    const [education, setEducation] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const [user] = useAuthState(auth);
    const name = user.displayName;
    const email = user.email;



    useEffect(() => {
        fetch(`http://localhost:5000/profile/${email}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setProfile(data[0]);
                    console.log('profile', data[0]);
                    setEducation(data[0]?.education);
                    setLocation(data[0]?.location);
                    setPhone(data[0]?.phone);
                    setLinkedin(data[0]?.linkedin);
                }
            })
    }, [email])

    const handleUpdateUser = (event) => {
        event.preventDefault();

        const updatedProfile = { education, location, phone, linkedin };
        console.log('updated', updatedProfile);

        // send data to the server
        const url = `http://localhost:5000/profile/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProfile),
        })
            .then(res => res.json())
            .then(data => {
                toast('Profile update successfully');
                fetch(`http://localhost:5000/profile/${email}`, {
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.length > 0) {
                            setProfile(data[0]);
                            console.log('profile', profile);
                            setEducation(data[0].education);
                            setLocation(data[0].location);
                            setPhone(data[0].phone);
                            setLinkedin(data[0].linkedin);
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        toast.error('Failed to get updated profile data');
                    });
                event.target.reset();
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to update profile')
            })
    }

    return (
        <div>
            <h2 className='underline text-center text-2xl font-bold font-serif text-violet-500 mt-6 mb-3'>{user.displayName}'s Profile</h2>

            <div className='mb-3 mx-6 lg:mx-64 px-6 lg:px-24 py-4 lg:py-10 rounded-md bg-sky-100'>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Name:</span> {name} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Email:</span> {email} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Education:</span> {education} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Location:</span> {location} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Phone:</span> {phone} </h2>
                <h2 className='text-xl mb-1'><span className='font-semibold'>Linkedin Id:</span> {linkedin} </h2>
            </div>

            <div className='flex mt-4 justify-center items-center mx-1 lg:mx-auto'>
                <form onSubmit={handleUpdateUser} className='text-center w-96'>
                    <input onChange={event => setEducation(event.target.value)} type="text" name='education' placeholder='Education' className='input input-bordered w-full max-w-xs' />
                    <br />
                    <input onChange={event => setLocation(event.target.value)} type="text" name='location' placeholder='Location' className='input input-bordered w-full max-w-xs mt-1' />
                    <br />
                    <input onChange={event => setPhone(event.target.value)} type="text" name='phone' placeholder='Phone' className='input input-bordered w-full max-w-xs mt-1' />
                    <br />
                    <input onChange={event => setLinkedin(event.target.value)} type="text" name='linkedin' placeholder='Linkedin Id' className='input input-bordered w-full max-w-xs mt-1' />
                    <br />
                    <input type="submit" value="Update User" className='btn btn-sm btn-info text-white font-bold w-full max-w-xs mt-3' />
                </form>
            </div>

        </div>
    );
};

export default MyProfile;