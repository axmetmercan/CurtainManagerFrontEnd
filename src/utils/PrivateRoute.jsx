import React, {useContext} from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';


function PrivateRoute({children, ...rest}) {
    const {user} = useContext(AuthContext)

    return (
      <Routes>
        <Route {...rest}  >{children}</Route>
      </Routes>
  )
}
// element = {!authenticated ? <Navigate to="/"></Navigate> : element}
export default PrivateRoute
