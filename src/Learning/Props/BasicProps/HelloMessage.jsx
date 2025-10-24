import React, { useState } from 'react'
import MessageComponent from './MessageComponent'

function HelloMessage() {

    // const  tutorName="Saravana Durai";
    // const tutorAge=27;
    const[name,setName]=useState("Saravana Durai");
    const[age,setAge]=useState("27")
  return (
    <div>
        <p><b>Welcome to Props Topic !!!</b></p>
        <p>HelloMessage Component!!!</p>
        <p><b>Parent Sent data to Child</b></p>
        <div>
            < MessageComponent Name={name} Age={age}/>
            
        </div>
    </div>
  )
}

export default HelloMessage