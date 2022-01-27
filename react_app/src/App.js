import React, { Component } from 'react'
import Rect from './Rect.js'
import './App.css';

class App extends Component {
   data = [];

   msgStyle = {
      fontSize:"20pt",
      color:"#900",
      margin:"20px 0px",
      padding: "5px",
   }
   area = {
      width:"500px",
      height:"500px",
      border:"1px solid blue"
   }
   constructor(props){
      super(props);
      this.state = {
         list:this.data
      };
      this.doAction = this.doAction.bind(this);
   }
   doAction(e){
      let x = e.pageX;
      let y = e.pageY;
      this.data.push({x:x,y:y});
      this.setState({
         list:this.data
      });
   }

   draw(d){
      let X = d.x - 25;
      let Y = d.y - 25;
      let R = Math.floor(Math.random() *3);
      let C = "";
      if ( R <= 0 ){
         C = "#f663";
      } else if ( R <= 1){
         C = "#6f63";
      } else {
         C = "#66f3";
      };
 
      return <Rect x={X} y={Y} w="50" h="50" c={C} r="10"/>
   }

   render(){
      return <div>
         <h1>React</h1>
         <h2 style={this.msgStyle}>show rect.</h2>
         <div style={this.area} onClick={this.doAction}>
            {this.data.map((value)=>this.draw(value))}
         </div>
      </div>
   }

}

export default App;
