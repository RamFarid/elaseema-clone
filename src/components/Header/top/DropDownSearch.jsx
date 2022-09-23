import React from 'react'

function DropDownSearch({ active }) {
  return (
    <section
      className={
        active === true ? 'drop-down-search active' : 'drop-down-search'
      }
    >
      <div className='input-co'>
        <input type='text' placeholder='بحث..' />
        <button type='button'>بحث</button>
      </div>
    </section>
  )
}

export default DropDownSearch
