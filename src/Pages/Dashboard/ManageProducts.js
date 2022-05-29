import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PartsRow from './PartsRow';
import PartsDeleteConfirm from './PartsDeleteConfirm'

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);

    const { isLoading, data: parts, refetch } = useQuery('parts', () =>
        fetch(`https://hidden-fortress-98551.herokuapp.com/parts`, {
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
            <h2 className='text-center text-2xl font-bold font-serif text-violet-500 mt-6 mb-3'>Manage Products</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <PartsRow
                                key={part._id}
                                part={part}
                                index={index}
                                refetch={refetch}
                                setDeleteProduct={setDeleteProduct}
                            ></PartsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <PartsDeleteConfirm
                deleteProduct={deleteProduct}
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}
            ></PartsDeleteConfirm>}
        </div>
    );
};

export default ManageProducts;