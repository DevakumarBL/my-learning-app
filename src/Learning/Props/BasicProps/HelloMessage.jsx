import React from 'react'
import MessageComponent from './MessageComponent'

function HelloMessage() {

    const  tutorName="Saravana Durai";
    const tutorAge=27;
  return (
    <div>
        <p><b>Welcome to Props Topic !!!</b></p>
        <p>HelloMessage Component!!!</p>
        <p><b>Parent Sent data to Child</b></p>
        <div>
            < MessageComponent Name={tutorName} Age={tutorAge}/>
            
        </div>
    </div>
  )
}

export default HelloMessage