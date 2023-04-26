import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
    const { _id } = deleteOrder;

    const handleDelete = () => {
        fetch(`https://cyber-slice-server.onrender.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Order cancelled successfully`)
                    setDeleteOrder(null);
                    refetch();
                }
            })
    }

    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure ?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Yes</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;