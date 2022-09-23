import React from 'react'

function SliderItem({ title, category, img, onClick, link }) {
  return (
    <div
      className='slider-item'
      data-img={img}
      data-title={title}
      data-link={link}
      onClick={onClick}
    >
      <div className='title-slider-items'>
        {title.length > 10 ? `${title.substring(0, 55)}...` : title}
      </div>
      <div className='category'>{category}</div>
    </div>
  )
}

export default SliderItem
