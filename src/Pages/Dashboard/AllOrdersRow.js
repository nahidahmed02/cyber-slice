import React from 'react';

const AllOrdersRow = ({ order, index, setDeleteProduct }) => {
    const { email, parts, quantity } = order;

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{parts}</td>
            <td>{quantity}</td>

        </tr>
    );
};

export default AllOrdersRow;