import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'


import '../../styles/adminpage.css'

class Maintainers extends React.Component {
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
        <h1>Maintainers</h1>
        <h2>Add new maintainer</h2>
        <h2>Edit maintainer</h2>
        <h2>delete maintainer</h2>
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
)(Maintainers)
