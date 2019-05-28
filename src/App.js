import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

class Title extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    soldCount: PropTypes.number
  }

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
