import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

import MaterialIcon from 'material-icons-react'

import { BasicInfo } from './components'

import '../../styles/header.css'

class Header extends React.Component {
  state = {
    editing: false
  }

handleLogout = () => {
  const { logout } = this.props
  localStorage.clear()
  logout()
}


handleEdit = () => {
  const { editing } = this.state
  this.setState({ editing: !editing })
}

  render () {
    const { editing } = this.state
    const { user } = this.props.state
    console.log('jheadear', this.props.state)
    return (
      <div>
        <div className='header-wrapper'>
          <MaterialIcon icon='person' size={90} id='menu-icon' />
          <div>
            <h2>Welcome, {user.name ? user.name : 'onboard!'} {user.surname ? user.surname : ''}</h2>
            <h4> {user.title ? user.title : ''} at {user.company ? user.company : 'no company'}</h4>
          </div>
          <div className='button-container'>
            <button onClick={this.handleEdit}>
              {editing ? 'cancel' : 'edit'}
            </button>

            <button onClick={this.props.logout}>
              logout
            </button>

          </div>
        </div>
        {editing &&
          <BasicInfo handleEdit={this.handleEdit} />
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
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
)(Header)
