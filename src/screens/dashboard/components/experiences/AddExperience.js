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
    startedAt: 2019,
    endedAt: 2019,
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
    const {company, title} = this.state
    this.props.addExperience({company, title})
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
          <span>what is your name?</span>
          <input id='company' placeholder='enter your name' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>what is your surname?</span>
          <input id='title' placeholder='enter your surname' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Job Title?</span>
          <input id='title' placeholder='enter your title' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <span>Company?</span>
          <input id='company' placeholder='enter your company name' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <input required type="file" name="fileToUpload" multiple data-preview-to="#preview" />
          <div id='preview'></div>
        </div>
          <span className='error-message'>please enter valid data</span>
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
