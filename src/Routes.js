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

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/main']} component={Main} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin-login" component={AdminLogin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/teacher" component={Teacher} />
        <Route exact path="/parent" component={Parent} />
      </Switch>
    </Router>
  )
}
