import React, { useEffect, useState } from 'react'

function WithDependency() {
    const[count,setCount]=useState(0);
    const[calc,setCalc]=useState(0);
    useEffect(()=>{
        setTimeout(()=>setCount(count+1 ),1000)
        setTimeout(() =>setCalc(count*2),1000);
    },[])
    
  return (
    <div>
        <p>
            {count}
        </p>
        <button onClick={()=>setCount(count * 2)}>Addme</button>
    </div>
  )
}

export default WithDependency