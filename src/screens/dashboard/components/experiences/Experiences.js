import React from 'react'
import { connect } from 'react-redux'
import Experience from './Experience'
import AddExperience from './AddExperience'
import '../../../../styles/experience.css'

const Experiences = props => {
  const { darkmode, experience } = props
  return (
    <div
      className={`experience-area ${darkmode ? 'dark-area' : ''}`}
    >

      <AddExperience />
      {(experience &&
        experience.length &&
        experience.sort((a,b) => b.startedAt - a.startedAt).map((experience, index) => (
          <Experience key={index} experience={experience} darkmode={darkmode} />
        ))) || <noscript />}

    </div>
  )
}

const mapStateToProps = state => {
  return { experience: state.user.experience }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experiences)
