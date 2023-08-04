import React from 'react';

const PartsRow = ({ part, index, setDeleteProduct }) => {
    const { name } = part;

    return (
        <tr className='text-center'>
            <th style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{index + 1}</th>
            <td style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>{name}</td>
            <td style={{ color: '#1b2d45', backgroundColor: '#fffffe' }}>
                <label
                    onClick={() => setDeleteProduct(part)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-xs btn-error text-white">
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default PartsRow;