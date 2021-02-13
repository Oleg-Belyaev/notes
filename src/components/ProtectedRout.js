import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <Route>
      {
        props.token ? <Component {...props} /> : <Redirect to="/notes/login" />
      }
    </Route>
  )
}

export default ProtectedRoute;