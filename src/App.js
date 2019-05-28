import React from 'react';
import './App.css';
import Title from './Components/Title'

function App() {
  return (
    <div className="App">
      <Title title='Beer Shop Manuel' soldCount={10}/>
    </div>
  );
}

export default App;
