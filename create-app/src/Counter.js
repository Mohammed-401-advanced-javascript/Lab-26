import React from "react";

class Counter extends React.Component {
  constructor(properties) {
    super(properties);
    this.counter = 0;
  }

  handLeIncrementClick = e => {
    e.preventDefault();
    let counter = this.counter++;

    this.setState({ counter: counter++ });
  };
  handLeDecrementClick = e => {
    e.preventDefault();

    let counter = this.counter--;

    this.setState({ counter: counter++ });
  };

  render() {
    return (
      <section>
        <h3>{this.counter}</h3>
        <button className="button" onClick={this.handLeIncrementClick}>
          click for Increment
        </button>
        <button className="button" onClick={this.handLeDecrementClick}>
          click for Decrement
        </button>
      </section>
    );
  }
}

export default Counter;
