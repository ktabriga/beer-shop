import React from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends React.Component {

  render() {
    return (
      <div>
        <h1 className='Title'>{this.props.title}</h1>
        <small>Cervejas vendidas hoje: {this.props.soldCount}</small>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Title title='Beer Shop Manuel' soldCount={10}/>
    </div>
  );
}

export default App;
