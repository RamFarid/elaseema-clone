import React from 'react'
import Aside from './Aside'
import Home from './Home'
function Main() {
  return (
    <main>
      <div className='container main-page'>
        <Home />
        <Aside />
      </div>
    </main>
  )
}

export default Main
