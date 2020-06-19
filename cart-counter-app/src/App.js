import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 9 },
      { id: 4, value: 10 },
    ],
  };

  handleDelete = (counterId) => {
    // console.log(counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    const con = this.state.counters.filter(
      (c) => c.id === this.state.counters.length - 1
    );
    console.log(con);
    const newCounter = { id: con.id++, value: 0 };
    const counters = [...this.state.counters, newCounter];
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // this is bcz if we dont have this ,then it will change the whole state directly which is not acceptable in react....so we give reference to the argument that we get from the event
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // this is bcz if we dont have this ,then it will change the whole state directly which is not acceptable in react....so we give reference to the argument that we get from the event
    counters[index].value--;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container-fluid">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
