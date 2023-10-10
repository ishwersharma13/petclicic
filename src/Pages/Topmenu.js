import React from 'react'
import paw from "../Assets/paw.avif"

function Topmenu() {
  return (
    <div className="menu">
      <img style={{ borderRadius: '50px' }} width='50x' height='50px' src={paw} alt="service" />
      <h2 style={{ color: '#1c3055' }}>Dashboard</h2>
      <img style={{ borderRadius: '50px' }} width='50px' height='50px' src={paw} alt="service" />

    </div>
  )
}

export default Topmenu