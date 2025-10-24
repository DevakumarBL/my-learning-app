import { Fragment } from "react"

export function UserList({listOfUsers}){

    return <div>
         <table border={2}>
             <tr>
                 <th> ID </th>
                 <th> Username </th>
                 <th> Password </th>
             </tr>
            
                {(listOfUsers && listOfUsers.length !==0) ? 
                   listOfUsers.map((value,index) => {
                      const {username,password} = value

                     return <Fragment key = {index}>
                         <tr>
                            <td> {index + 1}</td>
                            <td> {username}</td>
                            <td> {password}</td>
                         </tr>
                     </Fragment>
                   }) 
                : <th colSpan={3}>Currently no users found</th>}
             
         </table>
    </div>
}