import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrdersRow from './AllOrdersRow';

const ManageAllOrders = () => {
    const { isLoading, data: orders, refetch } = useQuery('orders', () =>
        fetch(`https://cyber-slice-server.onrender.com/order`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='underline text-center text-2xl font-bold font-serif text-violet-500 mt-6 mb-3'>Manage Orders</h2>

            <div className="overflow-x-auto mx-4 lg:mx-28">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>S. No</th>
                            <th>Client's Email</th>
                            <th>Ordered Parts</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => <AllOrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></AllOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageAllOrders;