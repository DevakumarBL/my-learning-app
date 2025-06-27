import React, { Component } from 'react';
import CourseClassProps from './CourseClassProps';

class AdmissionClassProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentDetails: {
        candidateName: 'Devakumar BL',
        candidateAge: 22,
        candidateContact: "9360468795",
        candidateEnquiry: "React JS",
        candidateQualification: "MCA",
        canidateFrom: "Chennai"
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Admission</h1>
        <CourseClassProps studentDetails={this.state.studentDetails} />
      </div>
    );
  }
}

export default AdmissionClassProps;
