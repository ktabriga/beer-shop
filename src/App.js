import React from 'react';
import './App.css';
import Title from './Components/Title'
import PromoTime from './Containers/PromoTime'

function App() {
  return (
    <div className="App">
      <Title title='Beer Shop Manuel' soldCount={10}/>
      <PromoTime />
    </div>
  );
}

export default App;
