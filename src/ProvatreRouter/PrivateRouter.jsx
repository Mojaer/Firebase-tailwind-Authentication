import React, { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(authContext)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' replace={true} >Log in</Navigate>
};

export default PrivateRouter;