import React from 'react';
import ReactDOM from 'react-dom';

const app = document.createElement('div');
	
app.setAttribute("id", "app");
document.body.appendChild(app);
	
ReactDOM.render(
	<h1>Hello World</h1>,
	app
);