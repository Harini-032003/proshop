import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// to check if user is authorized, else navigate to login page
const PrivateRoute = () => {
  const {userInfo} = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
}

export default PrivateRoute