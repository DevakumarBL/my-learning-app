import {React, Component } from "react"

export default class EventExample extends Component{
    constructor(props){
        super(props)
        this.state = {
            appName:'Calculator',
            count:0
        }
    }
   
    
    render(){
        return <div>
            <h1>EventExample</h1>

            <p> {this.state.appName} - <button onClick={ 
                () => this.setState({ appName:'Scientific Calculator'})
                }>Change app name</button>
             </p>

            <h3>Count: {this.state.count} </h3> 
            <button onClick={
                ()=> this.setState({count:this.state.count+1})
                }> Increment
                </button>
            <button onClick={
                ()=>this.setState({count:this.state.count-1})
                }>Decrement
                </button>
            <button onClick={()=>this.setState({count: 0})}>Reset</button>

        </div>
    }
}