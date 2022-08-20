import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component<any, any> {
  methoid = () => {
    fetch('https://localhost:7037/WeatherForecast')
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            {' '}
            lkdfss; Learn React
          </a>
          <p className="name"></p>
        </header>
      </div>
    );
  }
}

export default App;
