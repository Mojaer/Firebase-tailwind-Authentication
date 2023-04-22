import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(authContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.log(error.message); });
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Project Tailwind</a>
                    {
                        user ?
                            <>
                                <p className='font-medium'>{user.email}</p>
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-sm btn-active btn-secondary ml-2">Log out
                                </button>
                            </> :
                            <Link className="btn btn-sm btn-active btn-secondary" to='/login'>Login</Link>
                    }
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li> <Link to='/register'>Register</Link></li>
                        <li> <Link to='/login'>Login</Link></li>
                        <li> <Link to='/hiddencomponent'>Hidden</Link></li>


                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;