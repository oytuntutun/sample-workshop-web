import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { Login } from '../screens'
import { Register } from '../screens'


// import Intro from 'screens/DashBoardPages/Intro'

const NotUser = ({ user }) => {
  console.log('not user', user)
  return (
    <Switch>
      <Route path="/dashboard" component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Login} />
    </Switch>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NotUser)
