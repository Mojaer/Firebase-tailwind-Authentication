import React, { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user } = useContext(authContext)
    if (user) {
        return children
    }
    return <Navigate to='/login' replace={true} >Log in</Navigate>
};

export default PrivateRouter;