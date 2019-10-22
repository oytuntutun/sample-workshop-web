import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import { Login } from '../screens'
import { DashBoard } from '../screens'


class MainNavigation extends Component {
  componentDidMount() {

  }

  render() {
    // if server has admin role enable to enable
    // pass admin={admin} to dashboard

    return (
      <main>
        <Switch>
          <Route path="/" component={DashBoard} />
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    role: state.role ? state.role : 'user',
    loginAttempt: state.loginAttempt
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainNavigation)
)
