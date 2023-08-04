import React from 'react';

const AllOrdersRow = ({ order, index }) => {
    const { email, parts, quantity } = order;

    return (
        <tr className='text-center'>
            <th style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{index + 1}</th>
            <td style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{email}</td>
            <td style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{parts}</td>
            <td style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{quantity}</td>

        </tr>
    );
};

export default AllOrdersRow;