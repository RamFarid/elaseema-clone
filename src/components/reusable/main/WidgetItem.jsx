import React from 'react'
// import Tippy from '@tippyjs/react'
// import 'tippy.js/dist/tippy.css'
// import 'tippy.js/animations/perspective.css'
import { BiTimeFive } from 'react-icons/bi'

function WidgetItem({ title, img, link, category }) {
  return (
    <article className='widget'>
      <figure>
        <img src={img} alt={title} />
        <figcaption>{category}</figcaption>
      </figure>
      <div className='content'>
        <h4 className='title-widgets'>
          <a href={link}>{title}</a>
        </h4>
        <div className='time'>
          <BiTimeFive style={{ fontSize: '16px', paddingLeft: '4px' }} />
          منذ ساعتين
        </div>
        <a href={link} className='read-more-btn'>
          أقرأ المزيد {'>>'}
        </a>
      </div>
    </article>
  )
}

export default WidgetItem
