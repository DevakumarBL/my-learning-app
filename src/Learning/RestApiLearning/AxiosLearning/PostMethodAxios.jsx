import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PostMethodAxios() {
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[job,setJob]=useState('')
    const[disable,setDisable]=useState(true)
    const[users,Setusers]=useState(null)

    useEffect(()=>{
        btnDisable()
    },[name,job,password])

    const btnDisable=()=>{
        setDisable(!(name && job && password ));
    }

    const handleSubmit = async(e) => {
            e.preventDefault()
    const payload={
                "name":name,
                "job":job
            }
    const option={
            "x-api-key" : 'reqres-free-v1'
    }
            const response = await axios.post("https://reqres.in/api/users",payload,{headers:option})
            console.log(response.data)
            Setusers(response.data)
    }

  return (
    <div>
        <h1>Post Method Learning Using AXIOS-API</h1>
        <div className="form">
            <form  onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="">UserName</label>
                    <input type="text"
                           placeholder='enter user name'
                           value={name}
                           onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="row">
                    <label htmlFor="">JobRole</label>
                    <input type="text"
                           placeholder='enter job role'
                           value={job}
                           onChange={(e)=>setJob(e.target.value)}
                    />
                </div>
                <div className="row">
                    <label htmlFor="">password</label>
                    <input type="password"
                           placeholder='enter password'
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="row">
                    
                    <input type="submit"
                           value="submit"
                           disabled={disable}
                           
                    />
                </div>
            </form>
        </div>
            {users && (
                        <div>
                            <h3>Created User</h3>
                            <p>Name: {users.name}</p>
                            <p>Job: {users.job}</p>
                            <p>ID: {users.id}</p>
                            <p>Created At:{users.createdAt}</p>
                        </div>
            )}

    </div>
  )
  
}

export default PostMethodAxios