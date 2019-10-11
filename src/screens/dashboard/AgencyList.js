import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

import { Link } from 'react-router-dom'

class AgencyList extends React.Component {

handleLogout = () => {
  const { logout } = this.props
  localStorage.clear()
  logout()
}

// fetch agencies and show them in cdm method



  render () {
    return (
      <div>
        <h1> agency list </h1>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log('app state', state.user)
  return { state: state.user }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: payload => {
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyList)
