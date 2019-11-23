import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExperience } from '../../../../store/actions/user/user'
import MaterialIcon from 'material-icons-react'
import Tips from '../Tips'

import '../../../../styles/experience.css'

const tips = [
  'I made frontend development',
  'I made backend development',
  'I made full-stack development'
]

const titleTips = [
  'JS developer',
  'React developer'
]

class AddExperience extends Component {
  state = {
    adding: false,
    company: '',
    title: '',
    description: '',
    startedAt: '2015',
    endedAt: '',
    currentlyWorking: false,
    location: '',
    showTips: false
  }


  handleAddExperience = () => {
    const { adding } = this.state
    this.setState({adding: !adding})
  }

  handleTemplate = (template) => {
    const { description } = this.state

    if(description.length) {
      this.setState({ description: `${description}, ${template}` })
    } else
    this.setState({ description: description + template })
  }

  handleTitleTips = (template) => {
    const { title } = this.state

    if(title.length) {
      this.setState({ title: `${title}, ${template}` })
    } else
    this.setState({ title: title + template })
  }

  closeTips = () => {
    this.setState({showTips: false})
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  saveExperience = () => {
    const {
      company,
      title,
      description,
      startedAt,
      endedAt,
      currentlyWorking,
      location
    } = this.state

    this.props.addExperience({
      company,
      title,
      description,
      startedAt,
      endedAt,
      currentlyWorking,
      location
    })
    this.handleAddExperience()
  }

  render() {
    const { adding, currentlyWorking, showTips, description, startedAt, title } = this.state
    const { darkmode } = this.props.state
    if (!adding) {
      return (
        <div
          className={`experience-wrapper ${darkmode ? 'dark-experience-wrapper' : ''}`}
        >
          <span
            className={`background-label ${darkmode ? 'dark-background-label' : ''}`}
          >
          Background
        </span>
          <MaterialIcon icon='post_add' size={20} id={darkmode ? 'light-icons' : ''} />
          <span>
            Experiences
          </span>
          <div>
            <button
              className={`${darkmode ? 'dark-button' : ''}`}
              onClick={this.handleAddExperience}
            >
              Add Experience
            </button>
          </div>
        </div>
      )
    }

    return (
      <div
        className={`basic-info-container ${darkmode ? 'dark-basic-info-container' : ''}`}
      >
        <h3>Fill in your company information:</h3>
        <div className='basic-info-sections'>
          <span>Company?</span>
          <input id='company' placeholder='Company Name?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <div>
            <div id='tips'>
              <span>Job Title?</span>
              <MaterialIcon
                onClick={()=> this.setState({showTips: 'titleTips'})}
                icon='gesture' size={24}
                id={darkmode ? 'light-icons' : ''}
              />
            </div>
            {showTips === 'titleTips' &&
              <Tips
                handleTemplate={this.handleTitleTips}
                tips={titleTips}
                closeTips={this.closeTips}
                darkmode={darkmode}
              />
            }
          </div>
          <input id='title' value={title} placeholder='What was your title?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Location?</span>
          <input id='location' placeholder='Where was it?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections' id='description-container'>
            <div id='tips'>
              <span>Job Description?</span>
              <MaterialIcon
                onClick={()=> this.setState({showTips: 'tips'})}
                icon='gesture'
                size={24}
                id={darkmode ? 'light-icons' : ''}
              />
            </div>
            {showTips === 'tips' &&
              <Tips
                handleTemplate={this.handleTemplate}
                tips={tips}
                closeTips={this.closeTips}
                darkmode={darkmode}
              />
            }
          <textarea value={description} id='description' placeholder='What did you do?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Started At?</span>
          <input type='number' value={startedAt} id='startedAt' placeholder='When did you start?' onChange={this.handleChange} />
        </div>
        {!currentlyWorking &&
          <div className='basic-info-sections'>
            <span>Ended At?</span>
            <input id='endedAt' placeholder='when did it end?' onChange={this.handleChange} />
          </div>
        }

        <div className='basic-info-sections radio-group'>
          <input type='checkbox' id='currentlyWorking' onChange={() => this.setState({ currentlyWorking: !currentlyWorking })} />
          <span id='stillWorking'>I am Still Working Here</span>
        </div>

        <div className='basic-info-sections buttons'>
          <button
            onClick={this.saveExperience}
            className={`${darkmode ? 'dark-button' : ''}`}
          >
            save
          </button>
          <button
            onClick={this.handleAddExperience}
            className={`${darkmode ? 'dark-button' : ''}`}
          >
            cancel
          </button>
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
    addExperience: payload => {
      dispatch(addExperience(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExperience)
