import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { CgMenuRound } from 'react-icons/cg';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="dashboard-sidebar" className="drawer-button lg:hidden"><CgMenuRound className='text-3xl ml-4 mt-3' /></label>

                <h2 className='underline text-2xl font-bold font-serif text-amber-500 ml-6 my-6'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side mb-auto mt-14 lg:ml-3 rounded-md">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="bg-white menu p-4 overflow-y-auto w-52 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li className='font-bold font-serif text-red-600 lg:mt-1'><CustomLink to="/dashboard">My Profile</CustomLink></li>
                    {
                        !admin && <>
                            <li className='font-bold font-serif text-red-600'><CustomLink to="/dashboard/myOrders">My Orders</CustomLink></li>
                            <li className='font-bold font-serif text-red-600'><CustomLink to="/dashboard/addReview">Add a Review</CustomLink></li>
                        </>
                    }

                    {
                        admin && <>
                            <li className='font-bold font-serif text-red-600'><CustomLink to="/dashboard/manageAllOrders">Manage Orders</CustomLink></li>
                            <li className='font-bold font-serif text-red-600'><CustomLink to="/dashboard/addProduct">Add A Product</CustomLink></li>
                            <li className='font-bold font-serif text-red-600'><CustomLink to="/dashboard/makeAdmin">Make Admin</CustomLink></li>
                            <li className='font-bold font-serif text-red-600'><CustomLink to="/dashboard/manageProducts">Manage Products</CustomLink></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;