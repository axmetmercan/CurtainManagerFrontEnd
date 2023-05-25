import React, {useContext} from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';


function PrivateRoute({children, ...rest}) {
    const {user} = useContext(AuthContext)
    if (!user) {
      return <Navigate to ="/" replace/>}
    return children
  //   return (
  //     <Routes>
  //       <Route {...rest}  >{children}</Route>
  //     </Routes>
  // )
}
// element = {!authenticated ? <Navigate to="/"></Navigate> : element}
export default PrivateRoute
