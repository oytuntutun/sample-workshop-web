import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteEducation } from '../../../../store/actions/user/user';
import EditEducation from './EditEducation';
import MaterialIcon from 'material-icons-react'

class Education extends Component {
  state = {
    editing: false
  }

  handleDelete = () => {
    const { deleteEducation } = this.props
      deleteEducation(this.props.education._id)
  }

  handleEdit = () => {
    const { editing } = this.state
    this.setState({ editing: !editing})
  }


  render() {
    const { editing } = this.state
    const { education } = this.props
    const { currentlyStudying, endedAt } = education

    if (!editing) {
      console.log(education)
      return (
        <div className='experience-container'>
          <div className='experience-header'>
            <h4>{education.school}</h4>
            <MaterialIcon icon='edit' size={20} onClick={()=>this.setState({editing: !editing})} />
            <MaterialIcon icon='delete' size={20} onClick={()=>this.handleDelete()} />
          </div>

          <div className='experience-content'>
            <div className='content-container'>
              <p>Division:</p>
              <p>{education.division}</p>
            </div>

            <div className='content-container'>
              <p>Brief description:</p>
              <p>{education.description}</p>
            </div>

            <div className='content-container'>
              <p>Location: </p>
              <p>{education.location}</p>
            </div>

            <div className='content-container'>
              <p>Graduation degree: </p>
              <p>{education.degree}</p>
            </div>
            <p>
              {education.startedAt} -
              {
                currentlyStudying
                ? ' Currently studying'
                : endedAt
              }
            </p>
          </div>

        </div>
      );
    }

    return (
      <EditEducation handleEdit={this.handleEdit} education={education} />
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteEducation: payload => {
      dispatch(deleteEducation(payload))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Education);
