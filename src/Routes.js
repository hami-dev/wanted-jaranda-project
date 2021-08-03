import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProtectedRoute from 'Route/ProtectedRoute'
import Main from 'Pages/Main/Main'
import Admin from 'Pages/Admin/Admin'
import Login from 'Pages/Login/Login'
import Signup from 'Pages/Signup/Signup'
import { fetchData } from 'Utils/fetch'
import { userListStorage } from 'Utils/Storage'

export default function Routes() {
  useEffect(() => {
    fetchData().then((res) => userListStorage.save(res))
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/main']} component={Main} />
        <ProtectedRoute path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  )
}
