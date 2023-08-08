import React from 'react';

const OrderRow = ({ ord, index, setDeleteOrder }) => {
    const { parts, quantity } = ord;

    return (
        <tr className='text-center'>
            <th style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{index + 1}</th>
            <td style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{parts}</td>
            <td style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{quantity}</td>
            <td style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>
                <label
                    onClick={() => setDeleteOrder(ord)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-xs btn-error text-white beating">
                    Cancel Order
                </label>
            </td>
        </tr>
    );
};

export default OrderRow;