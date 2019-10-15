import React from 'react';
import { connect } from 'react-redux';
import Experience from './Experience';
import AddExperience from './AddExperience';
import './experience.css';

const Experiences = ({ experiences }) => {
  return (
    <div className="">
      <div className="section-informer">
        <div className="section-content" />
      </div>

      <AddExperience />
      {(experiences &&
        experiences.length &&
        experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))) || <noscript />}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('zp state',state)
  return { experiences: state.user.experiences };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experiences);
