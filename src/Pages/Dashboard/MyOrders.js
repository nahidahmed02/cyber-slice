import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyOrders = () => {

    const [deleteOrder, setDeleteOrder] = useState(null);

    const [user] = useAuthState(auth);
    const email = user.email;

    const { isLoading, data: order, refetch } = useQuery('order', () =>
        fetch(`https://cyber-slice-server.onrender.com/order/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    console.log(order);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='underline text-center text-2xl font-bold font-serif text-violet-500 mt-6 mb-3'>{user.displayName}'s Order</h2>

            {
                !order ?
                    <h2 className='text-center text-2xl font-bold mt-3'>Hey {user.displayName}! You didn't order anything!</h2>
                    :
                    <div>
                        <div className="overflow-x-auto mx-4 lg:mx-28">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Ordered Parts</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order?.map((ord, index) => <OrderRow
                                            key={ord._id}
                                            ord={ord}
                                            index={index}
                                            refetch={refetch}
                                            setDeleteOrder={setDeleteOrder}
                                        ></OrderRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        {deleteOrder && <DeleteConfirmModal
                            deleteOrder={deleteOrder}
                            refetch={refetch}
                            setDeleteOrder={setDeleteOrder}
                        ></DeleteConfirmModal>}
                    </div>
            }

        </div>
    );
};

export default MyOrders;