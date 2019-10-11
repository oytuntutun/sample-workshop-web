import React from 'react'

import { connect } from 'react-redux'
import { updateMarina } from '../../store/actions/marinas'

import { Button, Input, Container, MarinaCard } from '../../components'

class Marina extends React.Component {
  state = {
    editing: false,
    marina: this.props.marina,
    _id: this.props.marina._id,
  }

  updateMarina = async () => {
    const {
      _id,
      marinaName,
      marinaPhone,
      marinaCoords,
      marinaVHF,
      marinaLocation,
      marinaSubscription
    } = this.state.marina

    const { updateMarina } = this.props

    const res = await updateMarina({
      marinaName,
      marinaPhone,
      marinaCoords,
      marinaVHF,
      marinaLocation,
      marinaSubscription,
      _id,
      token: localStorage.getItem('token')
    })
  }

  render() {
    const { editing, marina } = this.state
    const { x, deleteMarina } = this.props
    const {
      marinaName,
      marinaCoords,
      marinaVHF,
      marinaPhone,
      marinaLocation
    } = this.state.marina
    console.log('localdata', this.state.marina)
    return (
      <MarinaCard>
        {!editing ?
          <Container flexDir='column'>
            <p>Name: {marina.marinaName}</p>
            <p>Phone: {marina.marinaPhone}</p>
            <p>Coords: {marina.marinaCoords}</p>
            <p>VHF Channel: {marina.marinaVHF}</p>
            <p>Location: {marina.marinaLocation}</p>
            {marina.marinaSubscription
              ? <p>subscribed</p>
              : <p>notSubscribed</p>
            }
          </Container>
          :
          <Container flexDir='column'>
            <p>Name:
              <Input
                onChange={(e) => this.setState({marina: {...marina, marinaName: e.target.value}})}
                value={marinaName}
              />
            </p>

            <Input
              onChange={(e) => this.setState({marina: {...marina, marinaCoords: e.target.value}})}
              value={marinaCoords}
            />
          <Input
              onChange={(e) => this.setState({marina: {...marina, marinaPhone: e.target.value}})}
              value={marinaPhone}
            />
          <Input
              onChange={(e) => this.setState({marina: {...marina, marinaLocation: e.target.value}})}
              value={marinaLocation}
            />
          <Input
              onChange={(e) => this.setState({marina: {...marina, marinaVHF: e.target.value}})}
              value={marinaVHF}
            />
            <Button onClick={this.updateMarina}>Save</Button>

          </Container>

        }
        <Button onClick={() => this.setState({ editing: !editing})}>
          {!editing ? 'Edit' : 'Cancel Editing' }
        </Button>
        <Button color='red' onClick={()=>deleteMarina(x._id)}>delete</Button>
      </MarinaCard>
    )
}
}

const mapStateToProps = state => {
  return {
    state: state.user,
    role: state.user.role,
    marinas: state.marina
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMarina: payload => {
      dispatch(updateMarina(payload))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marina)
