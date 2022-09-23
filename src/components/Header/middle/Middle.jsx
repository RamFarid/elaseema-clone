import React from 'react'
import Logo from './Logo'
import Signatatures from './Signatures'
function MiddleHeader() {
  return (
    <section className='middle-header-wrapper'>
      <div className='middle-header container'>
        <Logo />
        <Signatatures />
      </div>
    </section>
  )
}

export default MiddleHeader
