import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GetMethodAxios() {
    const [userList,setUserList] =useState(null)

    useEffect(()=>{
        userListApi()
    },[])
   
    const userListApi = async () => {
        const response  = await axios.get("https://reqres.in/api/users?page=2")
        setUserList(response.data.data)
    }
   
    return <div>
    <table style={{width:"100%",border:"12px solid green"}}>      
         <tr style={{border:"2px solid grey"}}>
            <th>User ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
          { userList&& userList.length !== 0 ?
            userList.map((value,index) => {
              const { id, email,first_name ,last_name ,avatar } = value;
              return (
                <tr key={index} style={{border:"2px solid grey"}}>
                  <td>{id}</td>
                  <td>{email}</td>
                  <td>{first_name  }</td>
                  <td>{last_name}</td>
                  <td><img src={avatar} height={90} width={100} alt={first_name} /></td>
                </tr>
              );
            }) 
            : (
              <tr>
                <td><h3>Currently no user</h3></td>
              </tr>
            )}
       
      </table>
    </div>
}

export default GetMethodAxios