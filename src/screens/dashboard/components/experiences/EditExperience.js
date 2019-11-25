import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editExperience } from '../../../../store/actions/user/user'

class EditExperience extends Component {
  state = {
    ...this.props.experience,
    currentlyWorking: this.props.experience.currentlyWorking
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e => {
    const { editExperience, handleEdit } = this.props
    editExperience(this.state)
    handleEdit()
  }

  render() {
    const { handleEdit, darkmode } = this.props
    const { currentlyWorking, company, title, description, location, startedAt, endedAt } = this.state

    return (
      <div className='basic-info-container'>
        <div
          className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}
        >
          <span>Company</span>
          <input id='company' value={company} placeholder='Company' onChange={this.handleChange} />
        </div>
        <div className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}>
          <span>Title</span>
          <input id='title' value={title} placeholder='What was your title?' onChange={this.handleChange} />
        </div>
        <div className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}>
          <span>Location</span>
          <input id='location' value={location} placeholder='Where was it?' onChange={this.handleChange} />
        </div>
        <div className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}>
          <span>Description</span>
          <textarea id='description' value={description} placeholder='What did you do?' onChange={this.handleChange} />
        </div>
        <div className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}>
          <span>When did you start</span>
          <input id='startedAt' value={startedAt} placeholder='When did you start?' onChange={this.handleChange} />
        </div>
        {!currentlyWorking &&
          <div className={`basic-info-sections ${darkmode ? 'dark-basic-info-sections' : ''}`}>
            <span>When did it end?</span>
            <input id='endedAt' value={endedAt} placeholder='when did it end?' onChange={this.handleChange} />
          </div>
        }

        <div className='basic-info-sections radio-group'>
          <input type='checkbox' id='currentlyWorking' onChange={() => this.setState({ currentlyWorking: !currentlyWorking })} />
          <span id='stillWorking'>I am Still Working Here</span>
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
    editExperience: payload => {
      dispatch(editExperience(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExperience)
