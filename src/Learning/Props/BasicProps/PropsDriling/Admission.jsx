import React, { useState } from 'react'
import Course from './Course'

function Admission({props}) {
    const [studentDetails,setStudentDetails] = useState(
        {
            candidateName : 'Devakumar BL',
            candidateAge  : 22,
            candidateContact : "9360468795",
            candidateEnquiry : "React JS",
            candidateQualification : "MCA",
            canidateFrom    : "Chennai"
        }
    )

    return <div>
           <h1> Admission </h1>

           <Course  studentDetails = {studentDetails} />
    </div>
}

export default Admission