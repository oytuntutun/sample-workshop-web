import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import { login, loginSuccessful, setInitial } from '../../store/actions/user/user'
import { Loader } from '../../components'

import '../../styles/login.css'

class Login extends React.Component {
  state = {
    email: 'oytun',
    password: 'qwe',
    disabled: true
  }

  componentWillMount(){
    this.props.setInitial()
  }


  isValid = () => {
    const { email, password } = this.state
    if(email.length < 5 || password.length < 5) {
      this.setState({ disabled: true })
    }
    else this.setState({ disabled: false })
  }

  handleInput = (e) => {
    this.setState({ [e.target.id]: e.target.value}, ()=> this.isValid())
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
  }

  render() {
    const { email, password, disabled } = this.state
    const { user } = this.props.state
    const { newUser } = this.props
    console.log(this.state)
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
            placeholder='oytun'
            type='email'
            onChange={this.handleInput}
          />
          <input
            id='password'
            label='Password'
            value={password}
            placeholder='qwe'
            // type='password'
            onChange={this.handleInput}
          />
        {newUser && <h3>did you mean to register?</h3> }

          <div className='button-container'>
            <button
              type='submit'
              onClick={this.register}
              className={`${disabled ? 'deactivated' : ''}`}
            >
              Register
            </button>
            <Link to='/dashboard' onClick={()=>this.props.login({email, password})}>
              Login
            </Link>
          </div>
        </div>
        <div className='information-area'>
          <span>admin</span><br /> username: oytun, pw: qwe <br />
          <span>testuser</span><br /> username: testuser, pw: qwe
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('my login state ',state)
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
