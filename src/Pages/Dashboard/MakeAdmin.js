import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('https://cyber-slice-server.onrender.com/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='underline text-center text-2xl font-bold font-serif mt-6 mb-3 lg:mr-14' style={{ font: '#00214d' }}>Manage Admin</h2>

            <div className="overflow-x-auto mx-4 lg:mx-28">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center' style={{ color: '#00214d' }}>
                            <th>S. No</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Switch</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;