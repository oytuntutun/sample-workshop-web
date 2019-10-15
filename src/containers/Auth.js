import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import NotUser from './NotUser'
import User from './User'
import AdminPanel from './AdminPanel'

import { Loader } from '../components'

const Navigator = (props) => {
  const { user } = props
  const { loading } = props.user

  if(loading) {
    return <Loader />
  }

  if(user.role === 'admin') {
    return <AdminPanel />
  }

  if(user.isAuth) {
    return <User />
  }

  return <NotUser />
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps)(Navigator))
