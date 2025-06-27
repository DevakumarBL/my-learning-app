import React, { Component } from 'react';
import MessageClassComponent from './MessageClassComponent';

class HelloMessageClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorName: "Saravana Durai",
      tutorAge: 27
    };
  }

  render() {
    return (
      <div>
        <p><b>Welcome to Props Topic !!!</b></p>
        <p>HelloMessage Component!!!</p>
        <p><b>Parent Sent data to Child</b></p>
        <div>
          <MessageClassComponent Name={this.state.tutorName} Age={this.state.tutorAge} />
        </div>
      </div>
    );
  }
}

export default HelloMessageClassComponent ;
