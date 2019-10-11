import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import {
  AdminPage,
  AdminNavigationPanel,
  Marinas,
  Agencies,
  Maintainers
} from '../screens'


class AdminPanel extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <main className='admin-container'>
        <AdminNavigationPanel />
        <Switch>
          <Route path="/admin/marinas" component={Marinas} />
          <Route path="/admin/agencies" component={Agencies} />
          <Route path="/admin/maintainers" component={Maintainers} />
          <Route path="/DashBoard" component={AdminPage} />
          <Route path="/" component={AdminPage} />
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
  )(AdminPanel)
)
