import React, { useState } from 'react'
import SliderItem from '../reusable/main/SliderItem'
import { someData } from '../../data/someData'
function Slider() {
  const [sliderState, setSliderState] = useState({
    img: someData[0].img,
    title: someData[0].title,
  })
  function handleSlider(e) {
    let img = e.target.parentElement.dataset.img
    let title = e.target.parentElement.dataset.title
    let link = e.target.parentElement.dataset.link
    setSliderState({ title: title, img: img, link: link })
  }
  return (
    <section
      className='slider-home'
      style={{
        backgroundImage: `url(${someData[0].img})`,
      }}
    >
      <img src={sliderState.img} alt={sliderState.title} />
      <a href={sliderState.link} className='title'>
        {sliderState.title}
      </a>
      <div>
        {someData.map((el) => {
          return (
            <SliderItem
              img={el.img}
              title={el.title}
              category={el.category}
              link={el.link}
              key={el.id + 1}
              onClick={handleSlider}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Slider
