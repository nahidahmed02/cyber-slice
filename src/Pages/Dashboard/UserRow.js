import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://cyber-slice-server.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }

    const removeAdmin = () => {
        fetch(`https://cyber-slice-server.onrender.com/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to remove admin role')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data && data.role !== 'admin') {
                    toast.success('Successfully removed admin role');
                    refetch();
                }
            })
    }

    return (
        <tr className='text-center'>
            <th style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{index + 1}.</th>

            <td
                style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}
                className='italic'>
                {email}
            </td>

            <td
                style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}
                className='italic font-semibold text-sm'>
                {role === 'admin'
                    ?
                    'ADMIN'
                    :
                    'USER'
                }
            </td>

            <td>
                {role !== 'admin'
                    ?
                    <button
                        onClick={makeAdmin}
                        className="btn btn-xs btn-success"
                    >Make Admin</button>
                    :
                    <button
                        onClick={removeAdmin}
                        className={`btn btn-xs btn-error text-white 
                        ${(email === 'ahmednahid1995@gmail.com' || email === 'nahid@gmail.com' || email === 'test02@gmail.com') && 'btn-disabled'}`}
                    >Remove Admin</button>
                }
            </td>
        </tr>
    );
};

export default UserRow;