import React, { Component } from "react";
import ON from '../src/On.jpg'
import OFF from '../src/Off.jpg'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [
        {
          button: false,
        },
        {
          button: false,
        },
        {
          button: false,
        },
        {
          button: false,
        },
        {
          button: true,
        },
      ],
    };
  }
  update = (index) => {
     let temp = [...this.state.arr]
     temp[index].button = !temp[index].button
    
    console.log("TEST", this.state);
    
   }

  
  render() {
    return (
      <div>
        {this.state.arr.length && (this.state.arr) instanceof Array && this.state.arr.map((ele, index) => {
          return (
            <>
              { <img src={this.state.arr[index].button ? OFF : ON} alt="Button"  width='20px' height='20px'/>}{" "} 
              <button onClick={() => this.update(index)}>
                {ele.button ? "OFF" : "On"}
              </button>
              <br />
            </>
          );
        })}
      </div>
    );
  }

}
