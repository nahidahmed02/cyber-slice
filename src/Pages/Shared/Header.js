import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';
import { FaUserCircle } from 'react-icons/fa';
import Loading from './Loading';


const Header = () => {

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const navItems =
        <>
            <li>
                <CustomLink to='/'>Home</CustomLink>
            </li>

            {
                user
                &&
                <li>
                    <CustomLink to='/dashboard'>Dashboard</CustomLink>
                </li>
            }

            <li>
                <CustomLink to='/blogs'>Blogs</CustomLink>
            </li>

            <li>
                <CustomLink to='/portfolio'>My Portfolio</CustomLink>
            </li>

            {
                user
                    ?
                    <button onClick={logout} className="btn btn-ghost font-bold" style={{ color: '#00214d' }}>Sign Out</button>
                    :
                    <li><CustomLink to='/login'>Login</CustomLink></li>
            }
        </>

    const currentUser =
        <>
            {
                user
                    ?
                    <li className='ml-24 lg:ml-3 font-bold italic'>
                        <FaUserCircle className='text-xl mr-2' /> {user.displayName}
                    </li>
                    :
                    <li className='ml-24 lg:ml-3 font-bold italic'>
                        <FaUserCircle className='text-xl mr-2' /> Guest
                    </li>
            }
        </>

    return (
        <div className="navbar bg-gray-200">

            <div className="navbar-start">
                <div className="dropdown">

                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>

                <a className="cursor-pointer ml-20 text-2xl lg:text-3xl font-bold font-serif italic" style={{ color: '#FFA500' }}>
                    Cyber<span className='text-red-500 ml-2'>  Slice</span>
                </a>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>

            {currentUser}

        </div>
    );
};

export default Header;