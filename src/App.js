import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

class Title extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    soldCount: PropTypes.number
  }

  render() {
    const {title, soldCount} = this.props
    return (
      <div className='Title'>
        <h1>{title}</h1>
        <small>Cervejas vendidas hoje: {soldCount}</small>
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
