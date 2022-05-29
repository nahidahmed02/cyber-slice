import React from 'react';

const AllOrdersRow = ({ order, index, setDeleteProduct }) => {
    const { email } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>

        </tr>
    );
};

export default AllOrdersRow;