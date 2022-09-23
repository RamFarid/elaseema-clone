import React from 'react'

function Widget({ children, link, header }) {
  return (
    <section className='widget-parent'>
      <h3>
        <a href={link}>{header}</a>
        <div className='style-bar'></div>
      </h3>
      <div className='topics-container'>{children}</div>
    </section>
  )
}

export default Widget
