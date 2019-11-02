import React from 'react'
import { connect } from 'react-redux'
import Experience from './Experience'
import AddExperience from './AddExperience'

const Experiences = ({ experience }) => {
  return (
    <div className='experience-area'>

      <AddExperience />
      {(experience &&
        experience.length &&
        experience.map((experience, index) => (
          <Experience key={index} experience={experience} />
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
