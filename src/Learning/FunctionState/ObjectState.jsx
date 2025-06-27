import { useState } from "react";
function ObjectState(){
    const[Fruits,setFruits]=useState({
        itemName : "Apple",
        itemPrice : 200,
        itemQty : "100kg"
    })
    const changeme=()=>{
        setFruits({
            itemName:"Orange",
            itemPrice:100,
            itemQty:"200kg"
        })
    }
    const Addme=()=>{
        setFruits({
            itemName:"Graeps",
            itemPrice:50,
            itemQty:"50kg"
        })
    }
    return(
        <div>
            <h1>Our Fruits List</h1>
            <p>FruitsName :{Fruits.itemName} </p>
            <p>FruitsPrice :{Fruits.itemPrice} </p>
            <p>FruitsQuantity :{Fruits.itemQty}</p>
            <button onClick={changeme}>Changeme</button>
            <button onClick={Addme}>Addme</button>
        </div>
    )
}
export default ObjectState;


