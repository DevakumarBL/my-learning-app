import { memo } from "react";


export default memo(
    function PageHeading( props ) {
        const  {pageTitle,handleCount} = props
        console.log("Compoent is rendering....");
       

        return <div>
            <h1> {pageTitle} </h1>

             <button onClick={handleCount }> ADD </button>
            </div>
  
    }
)