import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({

	render() {

		return (
			<h1>Hello Serhio</h1>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('mount-point')
);
