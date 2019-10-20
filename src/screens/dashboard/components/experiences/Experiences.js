import React from 'react';
import { connect } from 'react-redux';
import Experience from './Experience';
import AddExperience from './AddExperience';
import './experience.css';

const Experiences = ({ experience }) => {
  return (
    <div className="">
      <div className="section-informer">
        <div className="section-content" />
      </div>

      <AddExperience />
      {(experience &&
        experience.length &&
        experience.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))) || <noscript />}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('zp state',state)
  return { experience: state.user.experience };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experiences);
