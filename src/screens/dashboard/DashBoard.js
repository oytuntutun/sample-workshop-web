import React from 'react'

import { connect } from 'react-redux'
import { logout, removeError } from '../../store/actions/user/user'

import { Header } from './components'
import { Experiences, Educations }  from './components'
import MaterialIcon from 'material-icons-react'

import '../../styles/dashboard.css'

class DashBoard extends React.Component {

handleLogout = () => {
  const { logout } = this.props
  localStorage.clear()
  logout()
}

handleGlobalError = () => {
  const { error } = this.props.state
  const { removeError } = this.props

  if(error) {
    setTimeout(()=> {
      removeError()
    }, 8000)
  }

  return (
    error &&
      <div className='server-error-message' onClick={() => removeError()}>
        <span>
          sorry something went wrong 😞
        </span>
        <MaterialIcon icon='close' size={30} />
      </div>
  )
}

  render () {
    const { loading } = this.props.state

    if(loading) {
      return <div>loading</div>
    }

    return (
      <div className='page-wrapper'>
        <Header />
        {this.handleGlobalError()}
        <div className='content-area'>
          <Experiences />
          <Educations />
        </div>
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
    },
    removeError: () => {
      dispatch(removeError())
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)
