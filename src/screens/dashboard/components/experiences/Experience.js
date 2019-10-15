import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteExperience } from '../../../../store/actions/user/user';
import EditExperience from './EditExperience';

class Experience extends Component {
  state = {
    editing: false
  };

  handleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  handleDelete = id => {
    if (id) {
      this.props.deleteExperience({ id });
    }
  };

  render() {
    const { editing } = this.state;
    const { experience } = this.props;
    if (!editing) {
      return (
        <div>
          <p>{experience.company}</p>
          <p>{experience.location}</p>
          <p>{experience.title}</p>
        </div>
      );
    }

    return (
      <EditExperience handleEdit={this.handleEdit} experience={experience} />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteExperience: payload => {
      dispatch(deleteExperience(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experience);
