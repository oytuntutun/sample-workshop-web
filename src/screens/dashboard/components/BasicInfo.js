import React from 'react'
import { connect } from 'react-redux'
import { logout, saveInformation } from '../../../store/actions/user/user'

class BasicInfo extends React.Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  saveInformation = () => {
    const { user } = this.props.state.user
    const { name } = this.state
    this.props.saveInformation({name})
  }

  render () {
    const { user } = this.props.state.user
    console.log('dsaldkjhask',this.props)
    return (
      <div className='basic-info-container'>
        <div className='basic-info-sections'>
          <span>what is your name?</span>
          <input id='name' placeholder='enter your name' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <button onClick={this.saveInformation}>save</button>
          <button>cancel</button>
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
    saveInformation: payload => {
      dispatch(saveInformation({payload}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfo)
