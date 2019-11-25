import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editEducation } from '../../../../store/actions/user/user'

class EditEducation extends Component {
  state = {
    ...this.props.education,
    currentlyStudying: this.props.education.currentlyStudying
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e => {
    const { editEducation, handleEdit } = this.props
    editEducation(this.state)
    handleEdit()
  }

  render() {

    const { handleEdit, darkmode } = this.props

    const {
      currentlyStudying,
      school,
      division,
      description,
      location,
      startedAt,
      endedAt,
      degree
    } = this.state

    return (
      <div className='basic-info-container'>
        <div
          className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}
        >
          <span>School Name:</span>
          <input id='school' value={school} placeholder='School' onChange={this.handleChange} />
        </div>
        <div
          className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}
        >
          <span>Division:</span>
          <input id='division' value={division} placeholder='What was your division?' onChange={this.handleChange} />
        </div>
        <div
          className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}
        >
          <span>Location:</span>
          <input id='location' value={location} placeholder='Where was it?' onChange={this.handleChange} />
        </div>

        <div
          className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}
        >
          <span>Degree:</span>
          <input id='degree' value={degree} placeholder='Your degree?' onChange={this.handleChange} />
        </div>

        <div
          className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}
        >
          <span>Additional information:</span>
          <textarea id='description' value={description} placeholder='What did you do?' onChange={this.handleChange} />
        </div>
        <div
          className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}
        >
          <span>When did you start?</span>
          <input id='startedAt' value={startedAt} placeholder='When did you start?' onChange={this.handleChange} />
        </div>
        {!currentlyStudying &&
          <div
            className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}
          >
            <span>When did it end?</span>
            <input id='endedAt' value={endedAt} placeholder='when did it end?' onChange={this.handleChange} />
          </div>
        }

        <div className='basic-info-sections radio-group'>
          <input type='checkbox' id='currentlyStudying' onChange={() => this.setState({ currentlyStudying: !currentlyStudying })} />
          <span id='stillStudying'>I am Still Studying Here</span>
        </div>

        <div className='basic-info-sections buttons'>
          <button
            onClick={this.handleSubmit}
            className={`${darkmode ? 'dark-button' : ''}`}
          >
            Save
          </button>
          <button
            onClick={handleEdit}
            className={`${darkmode ? 'dark-button' : ''}`}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    editEducation: payload => {
      dispatch(editEducation(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEducation)
