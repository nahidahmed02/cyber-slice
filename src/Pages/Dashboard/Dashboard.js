import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { CgMenuRound } from 'react-icons/cg';



const Dashboard = () => {

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label for="dashboard-sidebar" className=" drawer-button lg:hidden"><CgMenuRound className='text-3xl' /></label>

                <h2 className=' text-2xl font-bold font-serif text-amber-500 ml-6 my-6'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="bg-gray-100 menu p-4 overflow-y-auto w-48 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='font-bold font-serif text-violet-700 lg:mt-1'><Link to="/dashboard">My Profile</Link></li>
                    <li className='font-bold font-serif text-violet-700'><Link to="/dashboard/myOrders">My Orders</Link></li>
                    <li className='font-bold font-serif text-violet-700'><Link to="/dashboard/addReview">Add a Review</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;