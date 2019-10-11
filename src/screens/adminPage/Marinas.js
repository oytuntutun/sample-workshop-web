import React from 'react'

import { connect } from 'react-redux'
import { addMarina, getMarinas, deleteMarina } from '../../store/actions/marinas'
import Marina from './Marina'

import '../../styles/adminpage.css'
import { Button, Container, Input } from '../../components'

class Marinas extends React.Component {
  state = {
    adding: false,
    marinaName: '',
    marinaPhone: '',
    marinaCoords: '',
    marinaVHF: 0,
    marinaLocation: '',
    marinaSubscription: false
  }

  componentDidMount() {
    this.getMarinas()
  }


  addMarina = async () => {
    const {
      marinaName,
      marinaPhone,
      marinaCoords,
      marinaVHF,
      marinaLocation,
      marinaSubscription
     } = this.state
    const { addMarina, getMarinas } = this.props
    const { token } = localStorage.getItem('token')

    const res = await addMarina({
      marinaName,
      marinaPhone,
      marinaCoords,
      marinaVHF,
      marinaLocation,
      marinaSubscription,
      token
     })
    getMarinas()
  }

  getMarinas = async () => {
    const { getMarinas } = this.props
    const { token } = localStorage.getItem('token')

    const res = await getMarinas({ token })
  }

  deleteMarina = async ( _id ) => {
    const { deleteMarina, getMarinas } = this.props
    const { token } = localStorage.getItem('token')
    const res = await deleteMarina({data: _id, token })
    getMarinas()
  }

  render () {
    const { token } = localStorage.getItem('token')
    const { marinaName, adding } = this.state
    const { marinas } = this.props
    console.log(this.state)
    return (
      <div>
        <h1>Marinas</h1>
        <Container>
          <h2>Add new marina</h2>
          <Button onClick={()=> this.setState({adding: !adding})}>
            {adding ? 'close panel' : 'add new'}
          </Button>
        </Container>
        {adding &&
          <div className='marina-admin-form'>
            <h4>Marina Name:</h4>
            <Input onChange={(e)=> this.setState({ marinaName: e.target.value })} placeholder='name' />
            <h4>Marina Phone:</h4>
            <Input onChange={(e)=> this.setState({ marinaPhone: e.target.value })} placeholder='phone' />
            <h4>marina Coordinates:</h4>
            <Input onChange={(e)=> this.setState({ marinaCoords: e.target.value })} placeholder='coords' />
            <h4>Marina VHF</h4>
            <Input onChange={(e)=> this.setState({ marinaVHF: e.target.value })} placeholder='channel' />
            <h4>Marina Location</h4>
            <Input onChange={(e)=> this.setState({ marinaLocation: e.target.value })} placeholder='location' />
            <h4>Subscription</h4>
              <div className='marina-admin-form-buttons'>
                <Button onClick={() => this.setState({ marinaSubscription: true})}>subscribe marina</Button>
                <Button onClick={() => this.setState({ marinaSubscription: false})}>remove marina subscription</Button>
              </div>
            <Button onClick={()=>this.addMarina({name: marinaName, token})}>addMarina</Button>
          </div>
        }
        <br />
        all marinas:
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {marinas && marinas.marina && marinas.marina.map((x) => {
            return (
              <div key={x._id}>
                <Marina marina={x} deleteMarina={this.deleteMarina} x={x} />
              </div>
          )
          })}
        </div>
        <Button onClick={()=>this.getMarinas()}>getMarinas</Button>
      </div>
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
    addMarina: payload => {
      dispatch(addMarina(payload))
    },
    getMarinas: payload => {
      dispatch(getMarinas(payload))
    },
    deleteMarina: payload => {
      dispatch(deleteMarina(payload))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marinas)
