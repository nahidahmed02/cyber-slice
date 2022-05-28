import React from 'react';

const OrderRow = ({ ord, index, setDeleteOrder }) => {
    const { parts, quantity } = ord;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{parts}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeleteOrder(ord)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Cancel Order</label>
            </td>
        </tr>
    );
};

export default OrderRow;