import React from 'react'

class Marina extends React.Component {
  state = {
    accordionOpen: false
  }



  render () {
    const { details } = this.props
    const { accordionOpen } = this.state
    console.log(this.props.details)
    return (
      <div>
        Profile
      </div>
    )
  }
}

export default Marina;
