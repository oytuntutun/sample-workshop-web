import React from 'react'
import { Login } from '../screens'

class Register extends React.Component {
  render () {
    return(
    <div>
      <Login newUser={true} />
    </div>
    )
  }
}

export default Register
