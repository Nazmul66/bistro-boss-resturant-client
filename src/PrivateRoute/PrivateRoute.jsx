import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { userInfo, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
     return <div><progress className="progress w-56"></progress></div>
    }

    if(userInfo?.email){
      return children;
    }
    
    return <Navigate to='/login' state = {{ from: location }} replace></Navigate>
};

export default PrivateRoute;