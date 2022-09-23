import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/perspective.css'

function SocialLinks({ link, icon, tooltip }) {
  return (
    <Tippy content={tooltip} animation='perspective'>
      <a className='social-links-item' href={link}>
        {icon}
      </a>
    </Tippy>
  )
}

export default SocialLinks
