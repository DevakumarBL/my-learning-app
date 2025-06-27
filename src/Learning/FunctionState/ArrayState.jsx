import { Fragment, useState } from "react";

function ArrayState(){
    const[product,setproduct]=useState(["Smart-Watch","Iphone","Smart-TV","Laptop"])
    return(
        <div>
            <h1>Our Products</h1>
            <p>{(product && product.length !==0)?
                    product.map((value,index)=>{
                        return <Fragment key={index}>
                            <p>{value}</p>
                        </Fragment>
                    })
                :
                    <h3>Products not Available</h3>
                }
                <div>
                    <button onClick={()=>setproduct([...product,"Desktop"])}>Add Product</button>
                </div>
            </p>
        </div>
    );
}
export default ArrayState;