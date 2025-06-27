import React, { Component } from 'react';
import ExaminationClassProps from './ExaminationClassProps';

class CourseClassProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: props.studentDetails,
      learningStatus: true
    };
  }

  handleChangeCourse = () => {
    this.setState(prevState => ({
      student: {
        ...prevState.student,
        candidateEnquiry: "Angular"
      }
    }));
  };

  render() {
    return (
      <div>
        <h1>Course</h1>
        <button onClick={this.handleChangeCourse}>Change Course</button>
        <ExaminationClassProps 
          studentDetails={this.state.student} 
          learningStatus={this.state.learningStatus} 
        />
      </div>
    );
  }
}

export default CourseClassProps;
