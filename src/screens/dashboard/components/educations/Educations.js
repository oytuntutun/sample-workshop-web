import React from 'react'
import { connect } from 'react-redux'

import Education from './Education'
import AddEducation from './AddEducation'


const Educations = ({ educations }) => {
    return (
      <div>

        <AddEducation />
        {(educations &&
          educations.length &&
          educations.map((experience, index) => (
            <Education key={index} educations={educations} />
          ))) || <noscript />}

      </div>
    )
  }

  const mapStateToProps = state => {
    return { educations: state.user.educations }
  }

  const mapDispatchToProps = dispatch => {
    return {}
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Educations)
