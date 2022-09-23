import React from 'react'

function Manager({ job, value }) {
  return (
    <div className='signature-item'>
      <div className='job'>{job}</div>
      <div className='manager'>{value}</div>
    </div>
  )
}

export default Manager
