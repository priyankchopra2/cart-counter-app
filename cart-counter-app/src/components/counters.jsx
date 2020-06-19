import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary btn-bg" onClick={this.props.onReset}>
          Reset
        </button>
        <button
          className="btn btn-primary btn-bg m-2"
          onClick={this.props.onAdd}
        >
          Add
        </button>
        <br />
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            cntr={counter}

            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
