import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import { ImHome3 } from 'react-icons/im'
function PageLinks({ link, text, menu, children }) {
  function hanldeMultipleClicks(e) {
    if (window.location.pathname === link) {
      e.preventDefault()
    }
  }
  return (
    <div
      className={menu ? 'page-links-item expand' : 'page-links-item'}
      style={
        window.location.pathname === '/' && link === '/'
          ? { backgroundColor: '#cf112d' }
          : null
      }
      onClick={hanldeMultipleClicks}
    >
      <a href={menu ? '#d' : link} className='home-links'>
        {link === '/' ? (
          <span>
            <ImHome3 />
          </span>
        ) : null}
        {text}
        {menu && <BsArrowDownShort />}
      </a>
      {children ? children : null}
    </div>
  )
}

export default PageLinks
