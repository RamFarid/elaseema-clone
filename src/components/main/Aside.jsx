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
        {currencies.map((currency) => {
          return (
            <Currency theValue={currency.value} currency={currency.currency} />
          )
        })}
      </Shortcuts>
      <Shortcuts header='مقالات الرأي'>
        {opinions.map((opinion) => {
          return (
            <Opinion
              img={opinion.img}
              say={opinion.say}
              title={opinion.title}
            />
          )
        })}
      </Shortcuts>
      <Shortcuts header='الأخبار الأكثر مشاهده'>
        {mostVeiw.map((data) => {
          return <MostVeiw link={data.link} title={data.title} />
        })}
      </Shortcuts>
    </aside>
  )
}

export default Aside
