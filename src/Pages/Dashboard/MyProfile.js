import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const [profile, setProfile] = useState();
    const [education, setEducation] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const [user] = useAuthState(auth);
    const name = user.displayName;
    const email = user.email;



    useEffect(() => {
        fetch(`https://cyber-slice-server.onrender.com/profile/${email}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setProfile(data[0]);
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

        // send data to the server to update
        const url = `https://cyber-slice-server.onrender.com/profile/${email}`;
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
                setProfile(data[0])
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to update profile')
            })
    }

    return (
        <div>
            <h2 className='underline text-center text-2xl font-bold font-serif mt-6 mb-8' style={{ font: '#00214d' }}>{user.displayName}'s Profile</h2>

            <div className='md:flex lg:flex'>
                <div className='mb-3 mx-6 lg:mx-10 px-8 lg:px-20 py-7 lg:py-10 rounded-lg hover:scale-110' style={{ backgroundColor: '#fffffe', color: '#1b2d45' }}>
                    <h2 className='mb-1'>
                        <span className='font-semibold'>Name:</span> {name}
                    </h2>
                    <h2 className='mb-1'>
                        <span className='font-semibold'>Email:</span> {email}
                    </h2>
                    <h2 className='mb-1'>
                        <span className='font-semibold'>Education:</span> {education}
                    </h2>
                    <h2 className='mb-1'>
                        <span className='font-semibold'>Location:</span> {location}
                    </h2>
                    <h2 className='mb-1'>
                        <span className='font-semibold'>Phone:</span> {phone}
                    </h2>
                    <h2 className='mb-1'>
                        <span className='font-semibold'>Linkedin Id:</span> {linkedin}
                    </h2>
                </div>

                <div className='flex my-6 lg:my-0 justify-center items-center mx-1'>

                    <form onSubmit={handleUpdateUser} className='text-center w-96'>
                        <input
                            onChange={event => setEducation(event.target.value)}
                            type="text"
                            name='education'
                            placeholder='Education'
                            className='input input-bordered w-full max-w-xs'
                        />

                        <br />

                        <input
                            onChange={event => setLocation(event.target.value)}
                            type="text"
                            name='location'
                            placeholder='Location'
                            className='input input-bordered w-full max-w-xs mt-1'
                        />

                        <br />

                        <input
                            onChange={event => setPhone(event.target.value)}
                            type="text"
                            name='phone'
                            placeholder='Phone'
                            className='input input-bordered w-full max-w-xs mt-1'
                        />

                        <br />

                        <input
                            onChange={event => setLinkedin(event.target.value)}
                            type="text"
                            name='linkedin'
                            placeholder='Linkedin Id'
                            className='input input-bordered w-full max-w-xs mt-1'
                        />

                        <br />

                        <input
                            type="submit"
                            value="Update User"
                            className='btn btn-sm btn-info text-white font-bold w-full max-w-xs mt-3'
                        />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;