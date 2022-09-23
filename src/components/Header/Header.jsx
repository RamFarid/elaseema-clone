import React, { StrictMode } from 'react'
import MiddleHeader from './middle/Middle'
import Top from './top/Top'
import Nav from './Nav/Nav'
import LastNewsHeader from './news scrolls/LastNewsHeader'
function Header() {
  return (
    <StrictMode>
      <header>
        <Top />
        <MiddleHeader />
        <Nav />
        <LastNewsHeader />
      </header>
    </StrictMode>
  )
}

export default Header
