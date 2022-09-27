import React from 'react'
import Marquee from 'react-fast-marquee'
import MarqueeItems from '../../reusable/header/MarqueeItems'
import { someData } from '../../../data/someData'
function NewsHeader() {
  return (
    <section className='news-header-wrapper'>
      <div className='news-header container'>
        <Marquee
          pauseOnHover={true}
          direction='right'
          speed='70'
          gradient={false}
        >
          {someData.map((data) => {
            return <MarqueeItems text={data.title} link={data.link} />
          })}
        </Marquee>
        <span>أخر الاخبار</span>
      </div>
    </section>
  )
}

export default NewsHeader
