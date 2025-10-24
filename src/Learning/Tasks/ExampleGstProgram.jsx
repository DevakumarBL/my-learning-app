import { useState,useEffect } from "react"

export function ExampleGstProgram(){
    const [price,setPrice] = useState(0)
    const [tax,setTax] = useState(0)
   

    useEffect(()=>{
        let tax = taxCalculation()
        tax && setTax(tax)
        return(()=>{
            tax = null
        })
    },[price])

    const taxCalculation = ()=> {
        if(price > 1000)
            return price * 8 / 100
        else
          return price * 3 / 100      
    }

    return <div>
        <p> Product Price : <input type="text" onChange = {(event)=>setPrice(event.target.value)} /></p>
        <p> Current price : {price}</p>
        <p> Tax : {tax}</p>
    </div>
}