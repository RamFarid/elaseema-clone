import React from 'react'
import Widget from '../reusable/main/Widget'
import WidgetItem from '../reusable/main/WidgetItem'
import { someData } from '../../data/someData'
import Slider from './Slider'
function Home() {
  return (
    <section className='home-page'>
      <Slider />
      <Widget header='أخبار مصر' link='#'>
        {someData.map((news) => {
          return (
            <WidgetItem
              title={news.title}
              link={news.link}
              category={news.category}
              img={news.img}
              key={news.id + 2}
            />
          )
        })}
      </Widget>
      <Widget header='أقتصاد' link='#'>
        {someData.map((news) => {
          return (
            <WidgetItem
              title={news.title}
              link={news.link}
              category={news.category}
              img={news.img}
              key={news.id + 2}
            />
          )
        })}
      </Widget>
      <Widget header='رياضه' link='#'>
        {someData.map((news) => {
          return (
            <WidgetItem
              title={news.title}
              link={news.link}
              category={news.category}
              img={news.img}
              key={news.id + 2}
            />
          )
        })}
      </Widget>
      <Widget header='فن و ثقافه' link='#'>
        {someData.map((news) => {
          return (
            <WidgetItem
              title={news.title}
              link={news.link}
              category={news.category}
              img={news.img}
              key={news.id + 2}
            />
          )
        })}
      </Widget>
    </section>
  )
}

export default Home
