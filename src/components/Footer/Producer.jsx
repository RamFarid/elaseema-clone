import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/perspective.css'
function Producer() {
  return (
    <Tippy
      content={<span style={{ fontSize: '20px' }}>Ram Farid</span>}
      animation='perspective'
      interactive={true}
    >
      <div className='producer'>
        Crafted by: <a href='https://ramfarid.netlify.app'>Ram Farid</a>
      </div>
    </Tippy>
  )
}

export default Producer
