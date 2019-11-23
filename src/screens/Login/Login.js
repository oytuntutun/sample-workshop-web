import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { login, loginSuccessful, setInitial } from '../../store/actions/user/user'

import '../../styles/login.css'

class Login extends React.Component {
  state = {
    email: 'demouser@gmail.com',
    password: 'qweqwe',
    disabled: true
  }

  componentDidMount(){
    this.isValid()
  }

  componentWillMount(){
    this.props.setInitial()
  }


  validateEmail = (email) => {
      var re = /^(([^<>()\\\\.,:\s@"]+(\.[^<>()\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
  }

  isValid = () => {
    const { email, password } = this.state

    if(this.validateEmail(email) && password.length >= 3) {
      this.setState({ disabled: false })
    }
    else this.setState({ disabled: true })
  }

  handleInput = (e) => {
    this.setState({ [e.target.id]: e.target.value}, () => this.isValid())
  }

  register = async () => {
    const { email, password } = this.state
    const { login } = this.props

    const res = await axios.post('https://cors-anywhere.herokuapp.com/https://sample-workshop-server.herokuapp.com/users/signup', {email, password})
    // const res = await axios.post('http://localhost:4000/users/signup', {email, password})
    if(res) {

    await login({ email, password })
    }
  }

  login = async () => {
    const { email, password } = this.state
    const { login } = this.props

    await login({ email, password })
  }

  render() {
    const { email, password, disabled } = this.state
    const { error } = this.props

    if(this.props.loading) {
      return <div>loading</div>
    }

    return (
      <div className='page-container'>
        <div className='login-container'>
          <input
            id='email'
            label='E-mail'
            value={email}
            placeholder='Email'
            type='email'
            onChange={this.handleInput}
          />
          <input
            id='password'
            label='Password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleInput}
          />
          {error && <h3>did you mean to register?</h3> }

          <div className='button-container'>
            <button
              type='submit'
              onClick={this.register}
              className={`${disabled ? 'deactivated' : ''}`}
              disabled={disabled}
            >
              Register
            </button>
            <button
              onClick={()=>this.props.login({email, password})}
              className={`${disabled ? 'deactivated' : ''}`}
              disabled={disabled}
            >
              Login
            </button>
          </div>
        </div>
        <span>Just click login for demo user</span>
        <div className='information-area'>
          <span>testuser</span>
          <br />
          <span> username: demouser, pw: qweqwe</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { error: state.user.error }
}

const mapDispatchToProps = dispatch => {
  return {
    login: payload => {
      dispatch(login(payload))
    },
    loginSuccess: () => {
      dispatch(loginSuccessful())
    },
    setInitial: () => {
      dispatch(setInitial())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
