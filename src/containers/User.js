import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import { Login } from '../screens'
import { DashBoard } from '../screens'


class MainNavigation extends Component {
  componentDidMount() {

  }

  render() {
const { admin } = this.props
    return (
      <main>
        <Switch>
          <Route path="/dashboard" component={DashBoard} admin={admin} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Login} />
          <Route exact path='/dasboard/:userId' component={Login} />
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {state: state.user, role: state.role ? state.role : 'user'}
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
