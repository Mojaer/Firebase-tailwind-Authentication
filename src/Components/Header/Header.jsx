import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Project Tailwind</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li> <Link to='/register'>Register</Link></li>
                        <li> <Link to='/login'>Login</Link></li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;