import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {

    const [user] = useAuthState(auth);

    // console.log(user.auth);

    const logout = () => {
        signOut(auth);
    };

    const navItems = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        {
            user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        }

        <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
        <li><CustomLink to='/portfolio'>My Portfolio</CustomLink></li>

        {
            user
                ?
                <button onClick={logout} className="btn btn-ghost text-red-600 font-bold">Sign Out</button>
                :
                <li><CustomLink to='/login'>Login</CustomLink></li>
        }


    </>
    return (
        <div className="navbar bg-emerald-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl font-bold font-serif italic text-amber-500">Cyber Slice</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            {
                user
                    ?
                    <li className='ml-3 font-bold italic'><FaUserCircle className='text-xl mr-2' /> {user.displayName}</li>
                    :
                    <li className='ml-3 font-bold italic'><FaUserCircle className='text-xl mr-2' /> Guest</li>
            }
        </div>
    );
};

export default Header;