import React from 'react'

import { connect } from 'react-redux'
import { logout, saveInformation } from '../../../store/actions/user/user'
import MaterialIcon from 'material-icons-react'
import { BasicInfo } from '../components'

import '../../../styles/header.css'
import chooseYourSide from '../../../assets/stormTrooperLight.png'

class Header extends React.Component {
  state = {
    editing: false,
    darkmode: this.props.user.darkmode
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

  handleDarkmode = () => {
    const { darkmode } = this.state
    this.setState({ darkmode: !darkmode }, ()=> {
      this.saveInformation()
    })

  }

  saveInformation = () => {
    const { darkmode } = this.state
    const { name, title, company, surname, photo } = this.props.user
      this.props.saveInformation({ name, title, company, surname, photo, darkmode })
  }

  render () {
    const { editing } = this.state
    const { user, exportToPDF, logout, takeSS } = this.props
    const { darkmode } = user

    return (
      <div>
        <div className={`header-wrapper ${darkmode ? 'dark-header' : ''}`}>
          <MaterialIcon icon='person' size={90} id='menu-icon' />
          <div>
            <h2>Welcome, {user.name ? user.name : 'onboard!'} {user.surname ? user.surname : ''}</h2>
            <h4> {user.title ? user.title : ''} {user.company ? 'at ' + user.company : ''}</h4>
            <div className='toggle-click-area' onClick={()=> this.handleDarkmode()}>
              <div className={`toggle-container ${!darkmode ? 'slide-container' : ''}`}>
                <img alt='img-preview' src={chooseYourSide} className={`toggle-button ${darkmode ? 'toggle-button-dark' : 'toggle-button-light'}`} />
              </div>
            </div>
            <a
               href='ResumeGenerator.dmg'
            >
              <button
                className={`${darkmode ? 'dark-button' : ''}`}
              >
                Download Mac client
              </button>
            </a>
            <br />
            <span style={{opacity: 0.3}}>You have to enable downloads from unidentified developers.</span>

          </div>
          <div className='button-container'>
            <button onClick={this.handleEdit} className={`${darkmode ? 'dark-button' : ''}`}>
              {editing ? 'Cancel' : 'Add information'}
            </button>

            <button onClick={exportToPDF} className={`${darkmode ? 'dark-button' : ''}`}>
              Export to PDF
            </button>

            <button onClick={takeSS} id='export-button' className={`${darkmode ? 'dark-button' : ''}`}>
              Screenshot to PDF
            </button>

            <button onClick={logout} className={`${darkmode ? 'dark-button' : ''}`}>
              Logout
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
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: payload => {
      dispatch(logout())
    },
    saveInformation: payload => {
      dispatch(saveInformation(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
