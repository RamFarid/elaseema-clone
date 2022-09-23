import React from 'react'
import { days, mounths } from '../../../data/date'
function TodaysDate() {
  const currentDate = new Date()
  return (
    <time className='date'>
      {days[currentDate.getDay()]}, {currentDate.getDate()}{' '}
      {mounths[currentDate.getMonth()]} {currentDate.getFullYear()}
    </time>
  )
}

export default TodaysDate
