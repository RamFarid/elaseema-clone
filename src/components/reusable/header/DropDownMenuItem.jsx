import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
function DropDownMenuItem({ link, text, menu, children }) {
  return (
    <li className={menu ? 'drop-menu-items expand' : 'drop-menu-items'}>
      <a href={link}>
        {text}
        {menu && <AiOutlineLeft />}
      </a>
      {children}
    </li>
  )
}

export default DropDownMenuItem
