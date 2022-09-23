import React from 'react'

function Shortcuts({ children, header }) {
  return (
    <section>
      <h3>{header}</h3>
      <div className='wrapper'>{children}</div>
    </section>
  )
}

export default Shortcuts
