import { useReducer } from "react"
const reducerFunction = (state,action)=>{
    switch(action){
        case "add":
            return state +=1
        case "sub" :
            return state -=1
        default:
            return state;
    }
}
export function CounterReducerProgram(){
    const[count,dispatch] = useReducer(reducerFunction,0);
    return(
        <div>
            <h1>count = {count}</h1>
            <button onClick={()=>dispatch("add")}>Add</button>
            <button onClick={()=>dispatch("sub")}>Sub</button>
        </div>
    )
}