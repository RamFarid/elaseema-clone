import React from 'react'

function MostVeiw({ link, title }) {
  return (
    <div className='most-veiw'>
      <a href={link}>{title}</a>
    </div>
  )
}

export default MostVeiw
