import React from 'react'

function Currency({ currency, theValue }) {
  return (
    <div className='currency'>
      <span>{currency}</span>
      <span>{theValue}</span>
    </div>
  )
}

export default Currency
