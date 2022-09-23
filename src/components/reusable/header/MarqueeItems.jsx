import React from 'react'
import { BiChevronsLeft } from 'react-icons/bi'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/perspective.css'
function MarqueeItems({ link, text }) {
  return (
    <Tippy
      content={
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {text}
        </div>
      }
      animation='perspective'
    >
      <a href={link}>
        <BiChevronsLeft />
        {text}
      </a>
    </Tippy>
  )
}

export default MarqueeItems
