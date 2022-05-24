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
        <div class="navbar bg-base-100 bg-emerald-600">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-3xl font-bold italic text-amber-400">Cyber Slice</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;