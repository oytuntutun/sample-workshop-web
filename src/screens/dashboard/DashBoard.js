import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

import { Header } from './components'
import { Experiences }  from './components'

import '../../styles/dashboard.css'

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

    if(loading) {
      return <div>loading</div>
    }

    return (
      <div className='page-wrapper'>
        <Header />
        <div className='content-area'>
          <Experiences />
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)
