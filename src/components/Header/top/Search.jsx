import React from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/perspective.css'
function Search({ active, setActive }) {
  function hanleSearch() {
    setActive(!active)
  }
  return (
    <Tippy
      content={<span style={{ fontSize: '20px' }}>بحث</span>}
      animation='perspective'
      interactive={true}
    >
      <button
        type='button'
        onClick={hanleSearch}
        style={active ? { color: 'red' } : null}
      >
        بحث
        <GiMagnifyingGlass />
      </button>
    </Tippy>
  )
}

export default Search
