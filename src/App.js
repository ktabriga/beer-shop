import React from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends React.Component {
  title = 'Beer Shop'

  render() {
    return (
      <h1 className='Title'>{this.title}</h1>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
