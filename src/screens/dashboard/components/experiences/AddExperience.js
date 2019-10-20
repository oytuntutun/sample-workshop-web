import React, { Component } from 'react';
import { addExperience } from '../../../../store/actions/user/user';
import { connect } from 'react-redux';
import MaterialIcon from 'material-icons-react'

import '../../../../styles/experience.css'

class AddExperience extends Component {
  state = {
    adding: false,
    company: '',
    title: '',
    description: '',
    startedAt: '2019',
    endedAt: '2019',
    currentlyWorking: false,
    location: ''
  };


  handleAddExperience = () => {
    const { adding } = this.state
    this.setState({adding: !adding})
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
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
  }

  render() {
    console.log(this.state)
    const {
      adding,
      description,
      startedAt,
      endedAt,
      currentlyWorking,
      location
    } = this.state;
    if (!adding) {
      return (
        <div className='experience-wrapper'>
          <MaterialIcon icon='post_add' size={20} />
          <span>
            Experiences
          </span>
          <div>
            <button
              onClick={this.handleAddExperience}
            >
              Add Experience
            </button>
          </div>

        </div>
      );
    }

    return (
      <div className='basic-info-container'>
        <h3>Fill in your company information:</h3>
        <div className='basic-info-sections'>
          <span>Company?</span>
          <input id='company' placeholder='Company Name?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Job Title?</span>
          <input id='title' placeholder='What was your title?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Location?</span>
          <input id='location' placeholder='Where was it?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Job Description?</span>
          <textarea id='description' placeholder='What did you do?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Started At?</span>
          <input id='startedAt' placeholder='When did you start?' onChange={this.handleChange} />
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
          <button onClick={this.saveExperience}>save</button>
          <button onClick={this.handleAddExperience}>cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {state: state.user}
};

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
)(AddExperience);
