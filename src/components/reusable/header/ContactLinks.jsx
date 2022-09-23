import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/perspective.css'

function ContactLinks({ link, text, icon, tooltip }) {
  return (
    <Tippy
      content={<span style={{ fontSize: '20px' }}>{tooltip}</span>}
      animation='perspective'
      interactive={true}
    >
      <a href={link} className='contact-links-item'>
        {icon}
        <span className='contact-dir'>{text}</span>
      </a>
    </Tippy>
  )
}

export default ContactLinks
