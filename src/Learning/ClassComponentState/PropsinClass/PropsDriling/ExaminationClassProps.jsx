import React, { Component } from 'react';
import ResultClassProps from './ResultClassProps';

class ExaminationClassProps extends Component {
  render() {
    const { studentDetails } = this.props;

    return (
      <div>
        <h1>Examination</h1>
        <ResultClassProps studentDetails={studentDetails} />
      </div>
    );
  }
}

export default ExaminationClassProps;
