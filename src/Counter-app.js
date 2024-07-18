import React, { Component } from "react";

class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    };

    decrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    };

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <h6>Count: {this.state.counter}</h6>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default CounterApp;
