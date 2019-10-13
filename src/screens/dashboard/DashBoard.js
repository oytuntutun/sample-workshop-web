import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

import { Link } from 'react-router-dom'
import Header from './Header'

import { Experiences }  from './components'

class DashBoard extends React.Component {
  state = {
    section: ''
  }

  componentDidMount() {
    // fetch data of the user with ID
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
    const { loading } = this.props.state
    const { user } = this.props.state.user
    
    if(loading) {
      return <div>loading</div>
    }
    return (
      <div className='page-wrapper'>
        <Header />
        <Experiences />
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
)(DashBoard)
