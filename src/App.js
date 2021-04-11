import logo from './logo.svg'
import './App.css'
import List from './components/List'
import Change from './components/Change'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="header__logo" alt="logo" />
        <p className="header__text">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="header__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <List />
        <Change />
      </main>
    </div>
  );
}

export default App
