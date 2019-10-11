import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

class AdminNavigationPanel extends React.Component {

  handleLogout = () => {
    const { logout } = this.props
    localStorage.clear()
    logout()
  }

  render () {
    return (
      <nav className='admin-navigation-container'>
        <div className='admin-navigation'>
          <Link to='/'>homepage</Link>
          <Link to='/admin/marinas'>Marinas</Link>
          <Link to='/admin/agencies'>Agencies</Link>
          <Link to='/admin/maintainers'>Maintainers</Link>
          <Link to='/admin/marinas'>Crew</Link>
          <Link to='/'>
            <button onClick={this.handleLogout}>logout</button>
          </Link>
        </div>
      </nav>
    )
  }
}


const mapStateToProps = state => {
  console.log('app state', state.user)
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
)(AdminNavigationPanel)
