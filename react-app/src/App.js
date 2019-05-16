import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
		</div>
	);
}

function Header() {
	return (
		<div className="Header">
			<div className="container">
				<img src="https://dummyimage.com/180x60/000/fff" alt="logo" />
				<ul className="main-menu">
					<li><a href="http://" target="_blank" rel="noopener noreferrer">Text</a></li>
					<li><a href="http://" target="_blank" rel="noopener noreferrer">Test</a></li>
					<li><a href="http://" target="_blank" rel="noopener noreferrer">Text2</a></li>
					<li><a href="http://" target="_blank" rel="noopener noreferrer">Texst2</a></li>
				</ul>
			</div>
		</div>
	)
}

export default App;
