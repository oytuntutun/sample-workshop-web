import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'
import { getMarinas } from '../../store/actions/marinas'
import Marina from './Marina'

import { Link } from 'react-router-dom'

class MarinaList extends React.Component {

handleLogout = () => {
  const { logout } = this.props
  localStorage.clear()
  logout()
}

// fetch agencies and show them in cdm method
componentDidMount() {
  this.props.getMarinas()
}


  render () {
    return (
      <div style={{marginTop: '30px'}}>
        {this.props.marinas.marina.map((marina => {
          return <Marina details={marina} />
        }))}
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log('app state', state.user)
  return {
    state: state.user,
    marinas: state.marina
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: payload => {
      dispatch(logout())
    },
    getMarinas: payload => {
      dispatch(getMarinas(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarinaList)
