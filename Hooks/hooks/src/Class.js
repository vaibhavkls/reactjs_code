import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0
	};

	setCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<h2>This is a counter using a class</h2>
				<h1>{this.state.count}</h1>

				<button onClick={this.setCount}>Click to Increment</button>
			</div>
		);
	}
}

export default Counter;