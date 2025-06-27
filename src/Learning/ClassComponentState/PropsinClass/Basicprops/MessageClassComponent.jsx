import React, { Component } from 'react';

class MessageClassComponent extends Component {
  render() {
    const { Name, Age } = this.props;

    return (
      <div>
        <p>Message Component!!!</p>
        <p><b>Child Accessing parent data</b></p>
        <p>Hii Students Myself <b>{Name}</b>, I'm a TCS Employee...</p>
        <p>And my Age is just <b>{Age}</b> ...</p>
      </div>
    );
  }
}

export default MessageClassComponent;
