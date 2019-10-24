import React from 'react'
import MaterialIcon from 'material-icons-react'
import { connect } from 'react-redux'
import { addEducation } from '../../../../store/actions/user/user'

class AddEducation extends React.Component {
  state = {
    adding: false,
    school: '',
    degree: '',
    division: '',
    startedAt: '',
    endedAt: '',
    currentlyStudying: false,
    location: ''
  }

  handleAddEducation = () => {
    const { adding } = this.state
    this.setState({adding: !adding})
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  saveEducation = () => {
    const {
      school,
      degree,
      division,
      startedAt,
      endedAt,
      currentlyStudying,
      location
    } = this.state

    this.props.addEducation({
      school,
      degree,
      division,
      startedAt,
      endedAt,
      currentlyStudying,
      location
    })
    this.handleAddEducation()
  }

  render () {
    const {
      adding,
      currentlyStudying
    } = this.state

    if (!adding) {
      return (
        <div className='experience-wrapper'>
          <MaterialIcon icon='post_add' size={20} />
          <span>
            Educations
          </span>
          <div>
            <button
              onClick={this.handleAddEducation}
            >
              Add Education
            </button>
          </div>

        </div>
      )
    }

    return (
      <div className='basic-info-container'>
        <h3>Fill in your school information:</h3>
        <div className='basic-info-sections'>
          <span>School name?</span>
          <input id='school' placeholder='School Name?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Division?</span>
          <input id='division' placeholder='What did you study?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Degree?</span>
          <input id='degree' placeholder='Where was it?' onChange={this.handleChange} />
        </div>

        <div className='basic-info-sections'>
          <span>Started At?</span>
          <input id='startedAt' placeholder='When did you start?' onChange={this.handleChange} />
        </div>
        {!currentlyStudying &&
          <div className='basic-info-sections'>
            <span>Ended At?</span>
            <input id='endedAt' placeholder='when did it end?' onChange={this.handleChange} />
          </div>
        }

        <div className='basic-info-sections radio-group'>
          <input type='checkbox' id='currentlyWorking' onChange={() => this.setState({ currentlyStudying: !currentlyStudying })} />
          <span id='stillWorking'>I am Still Studying Here</span>
        </div>

        <div className='basic-info-sections buttons'>
          <button onClick={this.saveEducation}>save</button>
          <button onClick={this.handleAddEducation}>cancel</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {state: state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    addEducation: payload => {
      dispatch(addEducation(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEducation)
