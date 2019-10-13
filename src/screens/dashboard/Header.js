import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

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

  render () {
    const { editing } = this.state
    const { user } = this.props.state
    console.log('jheadear',this.props.state)
    return (
      <div>
        <div className='header-wrapper'>
          <div>profile photo</div>
          <div>
            <span>welcome {user.name ? user.name : 'onboard!'}</span>
          </div>
          <div>
            <button onClick={() => this.setState({editing: !editing})}>
              {editing ? 'cancel' : 'edit'}
            </button>
          </div>
        </div>
        {editing &&
          <BasicInfo />
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
