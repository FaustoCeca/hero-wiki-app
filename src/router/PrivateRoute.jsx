import React, { useContext, useEffect, useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context';

const PrivateRoute = ({ children }) => {

    const { authState } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    const lastPath = useMemo(() => pathname + search, [pathname, search]);
    localStorage.setItem('lastPath', lastPath);
    
    

    return ( authState.logged ) 
            ? children 
            : <Navigate to='/login' /> ;
}

export default PrivateRoute;