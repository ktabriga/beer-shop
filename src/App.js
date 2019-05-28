import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

function Title(props) {
  const {title, soldCount} = props

  return (
    <div className='Title'>
      <h1>{title}</h1>
      <small>Cervejas vendidas hoje: {soldCount}</small>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  soldCount: PropTypes.number
}

function App() {
  return (
    <div className="App">
      <Title title='Beer Shop Manuel' soldCount={10}/>
    </div>
  );
}

export default App;
