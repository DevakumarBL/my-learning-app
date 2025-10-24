import { useState,useMemo } from "react"
export default function ExampleUsememo(){

    const [count,setCount] = useState(0)
    const [mulCount,setMulcount] = useState(2)
    const [title,setTitle] = useState("Example use memo")

    //const expensiveCalc = Calculation(count)

    const expensiveCalc = useMemo(()=>{
        Calculation(count)
    },[count])

    return <div>
          <h1> {title} </h1> <button onClick={()=>setTitle("Calculator")}> Change title</button>

          <p> Count : {count }</p> 
          <button onClick={()=>setCount(count + 1)}>updateCount</button>

          <p> Expensive Calc : {expensiveCalc} </p>

          <p> MUL count : {mulCount }</p> 
          <button onClick={()=>setMulcount(mulCount * 2)}>update Multiple count</button>        
    </div> 
}

const Calculation = (num) => {
   console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
 
}

