import React from 'react';
import CustomLink from './CustomLink';

const Header = () => {
    const navItems = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/purchase'>Purchase</CustomLink></li>
        <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
        <li><CustomLink to='/portfolio'>My Portfolio</CustomLink></li>
        <li><CustomLink to='/login'>Login</CustomLink></li>
    </>
    return (
        <div className="navbar bg-base-100 bg-emerald-100">
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

        </div>
    );
};

export default Header;