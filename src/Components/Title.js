import React from 'react';
import PropTypes from 'prop-types'
import './Title.css';

function Title({title, soldCount}) {
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

export default Title
