import React, { Component } from "react";
import DoCards from "./components/DoCards";
export default class App extends Component {
  state = {
    task: [],
  }; 
  add =  (e) => {
    const dodata = e.target.elements.addtodo.value;
    if (dodata.lenght > 0) {
      this.setState({
        task:[...this.task, dodata]
      })
      e.target.reset();
      console.log(this.state.task);
    }
  };
  render() {
    return (
      <div class=" bg-blue w-full p-8 flex justify-center font-sans">
        <div className="row-start-3">
          <DoCards add={this.add} task={this.state.task} />
        </div>
      </div>
    );
  }
}
