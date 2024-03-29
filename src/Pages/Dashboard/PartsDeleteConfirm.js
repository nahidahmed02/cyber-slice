import React from 'react';
import { toast } from 'react-toastify';

const PartsDeleteConfirm = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { _id } = deleteProduct;

    const handleDelete = () => {
        fetch(`https://cyber-slice-server.onrender.com/parts/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Parts deleted!`)
                    setDeleteProduct(null);
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
                    <p>Due to security reasons, CONFIRM button is kept disabled.</p>

                    <div className="modal-action">
                        <button
                            onClick={() => handleDelete()}
                            className="btn btn-xs btn-disabled text-white">
                            Confirm
                        </button>

                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsDeleteConfirm;