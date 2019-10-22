import React from 'react'
import { connect } from 'react-redux'

import Education from './Education'
import AddEducation from './AddEducation'


const Educations = ({ education }) => {
    return (
      <div>

        <AddEducation />
        {(education &&
          education.length &&
          education.map((education, index) => (
            <Education key={index} education={education} />
          ))) || <noscript />}

      </div>
    )
  }

  const mapStateToProps = state => {
    return { education: state.user.education }
  }

  const mapDispatchToProps = dispatch => {
    return {}
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Educations)
