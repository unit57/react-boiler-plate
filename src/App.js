import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../public/main.scss');

class App extends Component {

	render() {
		return (
			<h1> Hello World!</h1>
		);
	}
};

ReactDOM.render(<App />, document.querySelector("#app"));