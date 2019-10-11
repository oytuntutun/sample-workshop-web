import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { login, loginSuccessful, setInitial } from '../../store/actions/user/user'

import axios from 'axios'


class Login extends React.Component {
  state = {
    email: 'oytun',
    password: 'qwe'
  }

  componentWillMount(){
    this.props.setInitial()
  }

  register = async () => {
    const { email, password } = this.state
    const { loginSuccessful, user } = this.props

    await axios.post('http://localhost:4000/users/signup', {email, password})
    if(user && user._id) loginSuccessful()
  }

  login = async () => {
    const { email, password } = this.state
    const { login } = this.props

    const res = await login({ email, password })
    console.log('login res',res)
  }

  render() {
    const { email, password } = this.state
    const { user } = this.props.state
    const { newUser } = this.props
    return (
      <div>
        <input
          label='E-mail'
          value={email}
          placeholder='oytun'
          type='email'
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          label='Password'
          value={password}
          placeholder='qwe'
          // type='password'
          onChange={(e) => this.setState({ password: e.target.value })}
        />
      {newUser && <h3>did you mean to register?</h3> }

      <button type='submit' onClick={this.register}>Register</button>
        <Link to='/dashboard'>
          <button onClick={()=>this.props.login({email, password})}>Login</button>
        </Link>
        <div>
          <h4>admin</h4> username: oytun, pw: qwe <br /> <h4>testuser</h4> username: testuser, pw: qwe
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state: state }
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
