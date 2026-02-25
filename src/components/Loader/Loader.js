import React from 'react'
import './Loader.scss'
function Loader() {
  return (
    <div className='setLoading'>
      <div className="gooey-loader">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  )
}

export default Loader