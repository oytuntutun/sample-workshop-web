import { connect } from 'react-redux'
import React, { Component } from 'react'
import { deleteExperience } from '../../../../store/actions/user/user'
import EditExperience from './EditExperience'
import MaterialIcon from 'material-icons-react'

class Experience extends Component {
  state = {
    editing: false
  }


  handleEdit = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }

  handleDelete = () => {
    const { deleteExperience } = this.props
      deleteExperience(this.props.experience._id)
  }

  render() {
    const { editing } = this.state
    const { experience, darkmode } = this.props
    const { currentlyWorking, endedAt } = experience

    if (!editing) {
      return (
        <div
          className={`experience-container ${darkmode ? 'dark-experience-container' : ''}`}
        >
          <div className='experience-header'>
            <h4>{experience.company}</h4>
            <MaterialIcon
              icon='edit'
              size={20}
              onClick={()=>this.setState({editing: !editing})}
              color='gray'
            />
            <MaterialIcon
              icon='delete'
              size={20}
              onClick={()=>this.handleDelete()}
              color='gray'
            />
          </div>

          <div
            className={`experience-content ${darkmode ? 'dark-experience-content' : ''}`}
          >
            <div className='content-container'>
              <p>Title:</p>
              <p>{experience.title}</p>
            </div>

            <div className='content-container'>
              <p>Brief description:</p>
              <p>{experience.description}</p>
            </div>

            <div className='content-container'>
              <p>Location:</p>
              <p>{experience.location}</p>
            </div>

            <div className='content-container'>
              <p>When Started?:</p>
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

        </div>
      )
    }

    return (
      <EditExperience
        handleEdit={this.handleEdit}
        experience={experience}
        darkmode={darkmode}
      />
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteExperience: payload => {
      dispatch(deleteExperience(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experience)
