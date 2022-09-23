import React from 'react'

function Opinion({ img, title, say, link }) {
  return (
    <figure>
      <img src={img} alt={say} />
      <figcaption>
        <div className='title'>
          <a href={link}>{title}</a>
        </div>
        <div className='say'>{say}</div>
      </figcaption>
    </figure>
  )
}

export default Opinion
