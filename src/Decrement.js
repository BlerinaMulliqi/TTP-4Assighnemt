import React from 'react';
import {Component} from "react"
import ReactDOM from 'react-dom';
import  './index.css'


class Decrement extends Component{
    constructor(props){
        super(props);
        this.state= {
            click: 0,
            show: true
        };  
    }
    IncrementItem() {
    let val = this.state.click + 1;
        this.setState({ click: val});
    }
    DecrementItem(){
        if(this.state.click <= 0){
            alert('number can not be less than 0');
        }
        else{
            let val = this.state.click - 1;

            this.setState({ click: val});
        }
    }
    ToggleClick =() => {
        this.setState({ show: !this.state.show});
    }
  
    render(){
        return (
          <div class="Buttonstyle">
            <button on onClick={e => {this.IncrementItem()}}>Click to increas by 1</button>
            <button on onClick={e => {this.DecrementItem()}}>Click to decres by 1</button>
           
           <div id="number"> {this.state.click} </div>

          </div>
        );
    }
}
  export default Decrement;
