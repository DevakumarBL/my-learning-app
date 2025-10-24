import React, { useEffect, useState } from 'react'

function WithoutDependcy() {
    const[count,setCount]=useState(0);


    useEffect(()=>{

       setTimeout(()=>setCount(count+1),1000) ;
    },)
  return (
    <div>
        <div>
            <p>Count : {count}</p>
        </div>
        
    </div>
  )
}

export default WithoutDependcy