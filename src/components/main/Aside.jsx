import React from 'react'
import Shortcuts from '../reusable/main/Shortcuts'
import Currency from '../reusable/main/Currency'
import Opinion from '../reusable/main/Opinion'
import MostVeiw from '../reusable/main/MostVeiw'
import { currencies } from '../../data/currencies'
import { opinions } from '../../data/opinion'
import { mostVeiw } from '../../data/mostview'
function Aside() {
  return (
    <aside>
      <Shortcuts header='أسعار العملات'>
        {currencies.map((currency, id) => {
          return (
            <Currency
              theValue={currency.value}
              currency={currency.currency}
              key={id + 8}
            />
          )
        })}
      </Shortcuts>
      <Shortcuts header='مقالات الرأي'>
        {opinions.map((opinion, id) => {
          return (
            <Opinion
              img={opinion.img}
              say={opinion.say}
              title={opinion.title}
              key={id + 4}
            />
          )
        })}
      </Shortcuts>
      <Shortcuts header='الأخبار الأكثر مشاهده'>
        {mostVeiw.map((data, id) => {
          return <MostVeiw link={data.link} title={data.title} key={id + 10} />
        })}
      </Shortcuts>
    </aside>
  )
}

export default Aside
