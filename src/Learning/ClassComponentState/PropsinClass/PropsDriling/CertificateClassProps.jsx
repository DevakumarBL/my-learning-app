import React, { Component } from 'react';

class CertificateClassProps extends Component {
  render() {
    const { studentDetails } = this.props;

    return (
      <div>
        <h1>Certification</h1>
        <div>
          {JSON.stringify(studentDetails)}
        </div>
      </div>
    );
  }
}

export default CertificateClassProps;
