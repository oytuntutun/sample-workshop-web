import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExperience } from '../../../../store/actions/user/user'
import MaterialIcon from 'material-icons-react'
import Tips from '../Tips'

import '../../../../styles/experience.css'

const tips = [
  'Encrypt data transmissions and erect firewalls to conceal confidential information as it is being transmitted and to keep out tainted digital transfers.',
  'Develop plans to safeguard computer files against accidental or unauthorized modification, destruction, or disclosure and to meet emergency data processing needs.',
  'Review violations of computer security procedures and discuss procedures with violators to ensure violations are not repeated.',
  'Monitor use of data files and regulate access to safeguard information in computer files.',
  'Monitor current reports of computer viruses to determine when to update virus protection systems.',
  'Modify computer security files to incorporate new software, correct errors, or change individual access status.',
  'Perform risk assessments and execute tests of data processing system to ensure functioning of data processing activities and security measures.',
  'Confer with users to discuss issues such as computer data access needs, security violations, and programming changes.',
  'Train users and promote security awareness to ensure system security and to improve server and network efficiency.',
  'Coordinate implementation of computer system plan with establishment personnel and outside vendors.',
  'Document computer security and emergency measures policies, procedures, and tests.',
  'Maintain permanent fleet cryptologic and carry-on direct support systems required in special land, sea surface and subsurface operations.',
  'Demonstrate database technical functionality, such as performance, security and reliability.',
  'Design database applications, such as interfaces, data transfer mechanisms, global temporary tables, data partitions, and function-based indexes to enable efficient access of the generic database structure.',
  'Develop data models for applications, metadata tables, views or related database structures.',
  'Develop database architectural strategies at the modeling, design and implementation stages to address business or industry requirements.',
  'Develop load-balancing processes to eliminate down time for backup processes.',
  'Document and communicate database schemas, using accepted notations.',
  'Plan and install upgrades of database management system software to enhance database performance.',
  'Provide technical support to junior staff or clients.',
  'Set up database clusters, backup, or recovery processes.'
]

const titleTips = [
  'JS developer',
  'React developer',
  'Frontend developer',
  'Backend developer',
  'Full-stack developer'
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
    showTips: false,
    selectedTips: 0
  }


  handleAddExperience = () => {
    const { adding } = this.state
    this.setState({
      adding: !adding,
      company: '',
      title: '',
      description: '',
      startedAt: '2015',
      endedAt: '',
      currentlyWorking: false,
      location: '',
      showTips: false,
      selectedTips: 0
    })
  }

  handleTemplate = (template) => {
    const { description, selectedTips } = this.state

    if(selectedTips === 2) {
      this.closeTips()
    }

    if(description.length) {
      this.setState({ description: `${description} ${template}`, selectedTips: selectedTips + 1 })
    } else
    this.setState({ description: template, selectedTips: selectedTips + 1 })
  }

  handleTitleTips = (template) => {
    const { title, selectedTips } = this.state
      this.setState({ title: template })
      this.closeTips()
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
    console.log(this.state)
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
          <MaterialIcon icon='post_add' size={24} color='gray' />
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
                type={'titleSelect'}
                handleTemplate={this.handleTitleTips}
                closeTips={this.closeTips}
                tips={titleTips}
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
                type={'descSelect'}
                handleTemplate={this.handleTemplate}
                closeTips={this.closeTips}
                tips={tips}
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
