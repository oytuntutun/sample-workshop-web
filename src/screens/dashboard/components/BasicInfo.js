import React from 'react'
import { connect } from 'react-redux'
import { saveInformation } from '../../../store/actions/user/user'


class BasicInfo extends React.Component {
  state = {
    name: this.props.state.name,
    title: this.props.state.title,
    company: this.props.state.company,
    surname: this.props.state.surname,
    notValid: false,
    photo: false,
    darkmode: this.props.state.darkmode
  }

  previewImage = (event) => {
    this.setState({photo: true})
    let reader = new FileReader()

    reader.onload = () => {
    let output = document.getElementById('output_image')
    output.src = reader.result
    }

    reader.readAsDataURL(event.target.files[0])
  }

  handleChange = e => {
    this.setState({[e.target.id]: e.target.value})
  }

  saveInformation = () => {
    const { name, title, company, surname, notValid, photo, darkmode } = this.state
    const { handleEdit } = this.props

    if(name.length > 3 && title.length > 3 && company.length > 3 && surname.length > 3) {
    this.props.saveInformation({ name, title, company, surname, photo, darkmode })
    handleEdit()
  }
    this.setState({notValid: !notValid})
  }

  render () {
    const { notValid, photo, name, surname, title, company } = this.state
    const { handleEdit } = this.props
    const { darkmode } = this.props.state

    return (
      <div
        className={`basic-info-container ${darkmode ? 'dark-basic-info-container' : ''}`}
      >
        <h3>Fill in your basic information:</h3>
        <div className='basic-info-sections'>
          <span>what is your name?</span>
          <input
            id='name'
            placeholder='enter your name'
            onChange={this.handleChange}
            value={name}
          />
        </div>
        <div className='basic-info-sections'>
          <span>what is your surname?</span>
          <input
            id='surname'
            placeholder='enter your surname'
            value={surname}
            onChange={this.handleChange}
          />
        </div>
        <div className='basic-info-sections'>
          <span>Job Title?</span>
          <input
            id='title'
            placeholder='enter your title'
            onChange={this.handleChange}
            value={title}
          />
        </div>
        <div className='basic-info-sections'>
          <span>Company?</span>
          <input
            id='company'
            placeholder='enter your company name'
            onChange={this.handleChange}
            value={company}
          />
        </div>
        <div className='basic-info-sections'>
          <input
            required
            type='file'
            onChange={(e)=>this.previewImage(e)}
          />
        </div>
        {notValid &&
          <span className='error-message'>please enter valid data</span>
        }
        <div className='basic-info-sections buttons'>
          <button className={`${darkmode ? 'dark-button' : ''}`} onClick={this.saveInformation}>save</button>
          <button className={`${darkmode ? 'dark-button' : ''}`} onClick={handleEdit}>cancel</button>
        </div>
        {photo &&
          <div className='profile-photo-container'>
            <img id="output_image" alt='imagePreview'/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state: state.user }
}

const mapDispatchToProps = dispatch => {
  return {
    saveInformation: payload => {
      dispatch(saveInformation(payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfo)
