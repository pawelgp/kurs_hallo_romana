import React from 'react'
import './App.css';
import List from './components/List';
// import Change from './components/Change';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<header className="app__header"></header>
				<main>
					<List />
				</main>
			</div>
		);
	}
}
export default App;
