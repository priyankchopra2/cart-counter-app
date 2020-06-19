import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = this.getBtnClasses(); /*can use this method dirctly*/

    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.cntr)}
          className={classes}
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.cntr)}
          className="btn btn-info btn-sm mr-2"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.cntr.id)}
          className="btn btn-danger btn-sm"
        >
          DELETE
        </button>

        {/* <ul>
          {this.state.tag.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        <br />
      </React.Fragment>
    );
  }

  getBtnClasses() {
    let classes = "ml-5 m-2 btn btn-sm btn-";
    classes += this.props.cntr.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.cntr;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
