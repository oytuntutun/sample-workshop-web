import React from 'react'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/user'

import { Link } from 'react-router-dom'
import AgencyList from './AgencyList'
import MarinaList from './MarinaList'
import MaintainersList from './MaintainersList'

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
    const { section } = this.state
    const { role } = this.props
    return (
      <div>
        <h1>BOATER</h1>
        <h2>What do you want to do ?</h2>
        <select onChange={this.handleSection} id='options'>
          <option value=''>what do you need?</option>
          <option value="agency">I need an agency</option>
          <option value="marinas">I want to find a marina</option>
          <option value="maintainers">I need maintenance</option>
          <option value="crew">I want to find a crew member</option>
        </select>
        <br />
        {section === 'agency' &&
          <AgencyList />
        }

        {section === 'marinas' &&
          <MarinaList />
        }

        {section === 'maintainers' &&
          <MaintainersList />
        }

        {section === 'crew' &&
          <h3>Crew section is under construction</h3>
        }


        <Link to='/'>
          <button onClick={this.handleLogout}>logout</button>
        </Link>
        {role === 'admin' && <div>here is the admin panel</div>}
      </div>
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
)(DashBoard)
