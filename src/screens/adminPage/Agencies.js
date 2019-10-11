import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

import '../../styles/adminpage.css'

class Agencies extends React.Component {
  state = {
    section: ''
  }

handleLogout = () => {
  const { logout } = this.props
  localStorage.clear()
  logout()
}

handleSection = (e) => {
  const x = document.getElementById("options").value;
  this.setState({ section :x })
}

  render () {
    return (
      <div>
        <h1>Agecies</h1>
        <h2>Add new agency</h2>
        <h2>Edit agency</h2>
        <h2>delete agency</h2>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { state: state.user, role: state.user.role }
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
)(Agencies)
