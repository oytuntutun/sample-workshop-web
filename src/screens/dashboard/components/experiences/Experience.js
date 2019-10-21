import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteExperience } from '../../../../store/actions/user/user';
import EditExperience from './EditExperience';
import MaterialIcon from 'material-icons-react'

class Experience extends Component {
  state = {
    editing: false
  };

  handleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing })
  };

  handleDelete = () => {
    const { deleteExperience } = this.props
      deleteExperience(this.props.experience._id)
  };

  render() {
    const { editing } = this.state;
    const { experience, deleteExperience } = this.props;
    const { currentlyWorking, endedAt } = experience
    console.log('experience',experience.title)
    if (!editing) {
      return (
        <div className='experience-container'>
          <div className='experience-header'>
            <h4>{experience.company}</h4>
            <MaterialIcon icon='edit' size={20} onClick={()=>this.setState({editing: !editing})} />
            <MaterialIcon icon='delete' size={20} onClick={()=>this.handleDelete()} />
          </div>

          <div className='experience-content'>
            <p>{experience.title}</p>
            <p>{experience.location}</p>
            <p>
              {experience.startedAt} -
              {
                currentlyWorking
                ? ' currentlyWorking'
                : endedAt
              }
            </p>
          </div>

        </div>
      );
    }

    return (
      <EditExperience handleEdit={this.handleEdit} experience={experience} />
    );
  }
}

const mapStateToProps = state => {
  return {}
}

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
