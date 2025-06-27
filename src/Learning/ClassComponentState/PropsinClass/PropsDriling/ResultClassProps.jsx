import React, { Component } from 'react';
import CertificateClassProps from './CertificateClassProps';

class ResultClassProps extends Component {
  render() {
    const { studentDetails } = this.props;

    return (
      <div>
        <h1>Result</h1>
        <CertificateClassProps studentDetails={studentDetails} />
      </div>
    );
  }
}

export default ResultClassProps;
