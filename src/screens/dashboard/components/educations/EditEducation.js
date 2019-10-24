import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEducation } from '../../../../store/actions/user/user';

class EditEducation extends Component {
  state = {
    ...this.props.education,
    currentlyStudying: false
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    const { editEducation, handleEdit } = this.props;
    editEducation(this.state);
    handleEdit();
  };

  render() {
    console.log(this.state)
    const { handleEdit } = this.props
    const { currentlyWorking, school, title, description, location, startedAt, endedAt } = this.state;

    return (
      <div className='basic-info-container'>
        <div className='basic-info-sections'>
          <input id='school' value={school} placeholder='School' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <input id='title' value={title} placeholder='What was your title?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <input id='location' value={location} placeholder='Where was it?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <textarea id='description' value={description} placeholder='What did you do?' onChange={this.handleChange} />
        </div>
        <div className='basic-info-sections'>
          <input id='startedAt' value={startedAt} placeholder='When did you start?' onChange={this.handleChange} />
        </div>
        {!currentlyWorking &&
          <div className='basic-info-sections'>
            <input id='endedAt' value={endedAt} placeholder='when did it end?' onChange={this.handleChange} />
          </div>
        }

        <div className='basic-info-sections radio-group'>
          <input type='checkbox' id='currentlyWorking' onChange={() => this.setState({ currentlyWorking: !currentlyWorking })} />
          <span id='stillWorking'>I am Still Working Here</span>
        </div>

        <div className='basic-info-sections buttons'>
          <button onClick={this.handleSubmit}>save</button>
          <button onClick={handleEdit}>cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    editEducation: payload => {
      dispatch(editEducation(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEducation);
