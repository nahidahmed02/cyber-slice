import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { CgMenuRound } from 'react-icons/cg';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="dashboard-sidebar" className=" drawer-button lg:hidden"><CgMenuRound className='text-3xl' /></label>

                <h2 className=' text-2xl font-bold font-serif text-amber-500 ml-6 my-6'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="bg-gray-100 menu p-4 overflow-y-auto w-48 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li className='font-bold font-serif text-violet-700 lg:mt-1'><Link to="/dashboard">My Profile</Link></li>
                    {
                        !admin && <>
                            <li className='font-bold font-serif text-violet-700'><Link to="/dashboard/myOrders">My Orders</Link></li>
                            <li className='font-bold font-serif text-violet-700'><Link to="/dashboard/addReview">Add a Review</Link></li>
                        </>
                    }

                    {
                        admin && <>
                            <li className='font-bold font-serif text-violet-700'><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>
                            <li className='font-bold font-serif text-violet-700'><Link to="/dashboard/addProduct">Add A Product</Link></li>
                            <li className='font-bold font-serif text-violet-700'><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                            <li className='font-bold font-serif text-violet-700'><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;