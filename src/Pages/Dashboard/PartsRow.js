import React from 'react';

const PartsRow = ({ part, index, setDeleteProduct }) => {
    const { name } = part;

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>
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