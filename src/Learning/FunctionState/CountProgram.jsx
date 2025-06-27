import { useState } from "react";

function CountProgram(){
    const[Count,SetCount]=useState(0)
    return(
        <div>
            <h1>Count Program</h1>
            <h2>Count : {Count}</h2>
            <button onClick={()=>(SetCount)(Count+1)}>Increment</button>
            <button onClick={()=>(SetCount)(Count-1)}>Decrement</button>
            <button onClick={()=>(SetCount)(0)}>Reset</button>
        </div>
    );
}
export default CountProgram;