import { useState } from "react"
import { UserList } from "./UserList"
import { FormTemplate } from "./FormTemplate"


export function EntryPage(){

    const [formData,setFormData] = useState({})
    const [buttonDisable,setDisable] =useState(true)
    const [userList,setUserlist] = useState([])
    
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData,[name]:value})
        if(formData.username && formData.password) {
            setDisable(false)    
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setUserlist([...userList,formData])
        
    }

    return <div>
           <div className="container">
              
               <FormTemplate 
                    handleSubmit = {handleSubmit}
                    handleChange={handleChange}
                    buttonDisable={buttonDisable}
               
               
               />
           </div>

           <div className="userListcontainer">
                <UserList listOfUsers={userList} />
           </div>
    </div>
}