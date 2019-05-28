import React from 'react'

function PromoTime() {
  const containerStyle = {
    position: 'absolute',
    top: 40,
    right: 40,
    height: 110,
    width: 110,
    borderRadius: 55,
    border: '1px solid green',
    display: 'flex',
    flexDirection: 'Column',
    justifyContent: 'center'
  }
  const textStyle = {
    fontSize: 10,
    color: 'green',
    fontWeight: 'bold'
  }

  return(
    <div style={containerStyle}>
      <span style={textStyle}>Tempo Restante de promoção</span>
      <div style={{height: 8}}/>
      <span style={textStyle}>30 s</span>
    </div>
  )
}

export default PromoTime
