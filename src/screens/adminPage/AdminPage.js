import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

import '../../styles/adminpage.css'

class AdminPage extends React.Component {
  state = {
    section: ''
  }

handleLogout = () => {
  const { logout } = this.props
  localStorage.clear()
  logout()
}

handleSection = (e) => {
  const x = document.getElementById("options").value
  this.setState({ section :x })
}

  render () {
    return (
      <div>
        <h1>Admin page</h1>
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
)(AdminPage)
