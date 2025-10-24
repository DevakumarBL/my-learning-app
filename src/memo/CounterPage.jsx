import { useCallback, useState } from "react"
import PageHeading from "./PageHeading"


export default function CounterPage(){

    const [count,setCount] = useState(0)
    const [mulcount,setMulcount] = useState(2)
    const [pageTitle,setPageTitle] = useState("Counter Program")

    const handleCount = useCallback(() => {
        setCount(count + 1)
    },[count])

    return <div>

         <PageHeading 
            pageTitle = {pageTitle} 
            count = {count}
            handleCount = {handleCount}
         />

            <p> Count : {count} </p>
            <p> mulCount : {mulcount}</p>

            <button onClick ={()=> setMulcount(mulcount * 2)}> Mul count update </button>

       
        <button onClick ={()=> setPageTitle("Calculator")}> Change Title </button>
        
    </div>

}
