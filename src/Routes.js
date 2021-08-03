import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Main from 'Pages/Main/Main'
import Admin from 'Pages/Admin/Admin'
import Login from 'Pages/Login/Login'
import AdminLogin from 'Pages/Login/AdminLogin'
import Signup from 'Pages/Signup/Signup'
import Teacher from 'Pages/Teacher/Teacher'
import Parent from 'Pages/Parent/Parent'
import NotFound from 'Pages/NotFound/NotFound'
import PrivateRoute from 'Components/Routes/PrivateRoute'
import PublicRoute from 'Components/Routes/PublicRoute'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path={['/', '/main']} component={Main} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <PublicRoute exact restricted path="/login" component={Login} />
        <PublicRoute
          exact
          restricted
          path="/admin-login"
          component={AdminLogin}
        />
        <PublicRoute restricted exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/parent" component={Parent} />
        <PrivateRoute exact path="/teacher" component={Teacher} />
        <PublicRoute component={NotFound} />
      </Switch>
    </Router>
  )
}
