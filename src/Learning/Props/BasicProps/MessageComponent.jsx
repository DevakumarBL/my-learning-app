import React from 'react'

function MessageComponent({Name,Age}) {
  return (
    <div>
        
        <p>Message Component!!!</p>
        <p> <b>Child Accessing parent data</b></p>
        <p>Hii Students Myself <b>{Name}</b> i'm a TCS Employee...</p>
        <p>And my Age is just <b>{Age}</b> ...</p>
    </div>
  )
}

export default MessageComponent