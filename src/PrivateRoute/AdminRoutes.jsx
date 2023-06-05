import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../CustomLoader/useAdmin';

const AdminRoutes = ({ children }) => {
    const { userInfo, loading } = useContext(AuthContext);
    const [ isAdmin, isAdminLoading ] = useAdmin();
    const location = useLocation();
    
    if (loading || isAdminLoading){
     return <div><progress className="progress w-56"></progress></div>
    }

    if ( userInfo?.email && isAdmin ){
      return children;
    }
    
    return <Navigate to='/' state = {{ from: location }} replace></Navigate>
};

export default AdminRoutes;