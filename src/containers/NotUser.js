import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { Login } from '../screens'

// import Intro from 'screens/DashBoardPages/Intro'

const NotUser = ({ user }) => {
  return (
    <Switch>
      <Route path='/' component={Login} />
    </Switch>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NotUser)
