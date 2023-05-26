import React, {useContext} from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';


function PrivateRoute({children,}) {
    const {user} = useContext(AuthContext)
    if (!user) {
      return <Navigate to ="/" replace/>}
    return children
}
// element = {!authenticated ? <Navigate to="/"></Navigate> : element}
export default PrivateRoute
