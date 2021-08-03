import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import auth from 'Utils/Auth/Auth'

export default function ProtectedRoute({
  component: Component,
  authority,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      render={(props) =>
        auth.getAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}
