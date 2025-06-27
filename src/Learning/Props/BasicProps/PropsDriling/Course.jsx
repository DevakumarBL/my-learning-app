import { useState } from "react";
import Examination from "./Examination";

export default function CourseLearning({studentDetails}){
    const [student,setSudent] = useState(studentDetails)
    const [learningStatus,setLearningStatus] = useState(true)

    return <div>
           <h1> Course</h1>
           <button onClick ={()=>setSudent({...student,candidateEnquiry:"Angular"})} >Change Course</button>
           <Examination 
                studentDetails ={student} 
                learningStatus = {learningStatus} />      
    </div>
}