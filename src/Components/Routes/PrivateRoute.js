import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import GetAccessPathInfo from 'Utils/GetAccessPathInfo'

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        GetAccessPathInfo() &&
        GetAccessPathInfo().find(
          (accessiblePath) => accessiblePath === path
        ) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

export default PrivateRoute
