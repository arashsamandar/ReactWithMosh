import React,{Component} from "react";

export default class Counter extends Component{
    state = {
        count:0,
    }
    render() {
        return (
          <React.Fragment>
              <button className={this.getCounter()}>Example</button>
              // the thing is : when state changes , so does the render
              // thus the getCounter() and the classes in it
              // would be evaluated again .
              // if count===0 returns some values and if count !== 0 returns another value
          </React.Fragment>
        );
    }
    getCounter() {
        let classes = "btn btn-sm btn-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}