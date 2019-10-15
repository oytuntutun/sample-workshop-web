import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExperience } from '../../../../store/actions/user/user';

class EditExperience extends Component {
  state = {
    ...this.props.experience
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    const { editExperience, handleEdit } = this.props;
    editExperience(this.state);
    handleEdit();
  };

  render() {
    const { company, title, description, location } = this.state;
    return (
      <div>edit experience</div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    editExperience: payload => {
      dispatch(editExperience(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExperience);
