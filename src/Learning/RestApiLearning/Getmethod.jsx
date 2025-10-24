import React, {useState, Fragment, useEffect } from 'react'

function Getmethod() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async ()=>{
        let response = await fetch("https://fakestoreapi.com/products",{})
        let responseData = await response.json()
        setProducts(responseData)
    }
    // const handleUpdate=()=>{
    //     const newProduct={
    //         id:products.length +1,
    //         title:"PenDrive",
    //         price:499
    //     }
    //     setProducts([...products,newProduct])
    // }
  return (
    <div>
        <h1>Simple Get Method</h1>
        <div>
            <input type="text" placeholder='enter product name'
                   onChange={(e)=>setProducts(e.target.value)}/>

            <input type="text" placeholder='enter product price'
                   onChange={(e)=>setProducts(e.target.value)} 
            />
            <button>Update</button>
        </div>
        <h2>List Of Products</h2>
        <table border={3}>
            <tr align="center">
                <td>Product ID</td>
                <td>product Name</td>
                <td>Product Image</td>
                <td>product price</td>
                <td align='center' colSpan={2}>Action</td>
            </tr>
            {products&& products.length !==0 ?
                products.map((value,index)=>{
                    const {id,title,image,price}=value
                    return<Fragment key={index}>
                       <tr>
                        <td>{id}</td>
                        <td align='center' >{title}</td>
                        <td><img src={image} height={100} width={100} alt={title}/></td>
                        <td>{price}</td>  
                        <td ><button>Edit</button></td>
                        <td><button>Delete</button></td>             
                       </tr>
                    </Fragment>
                })
                :<h3>Currently no products</h3>
            }
        </table>
        {/* <button onClick={handleUpdate}>Addme</button> */}
    </div>
  )
}

export default Getmethod