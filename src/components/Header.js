import React from 'react'
import Logo from '../assests/blendlogo.png'

export default function Header() {
  return (
    <header>
      <h2>Home</h2>
      <h2>Reservation</h2>
      <h2>Menu</h2>
      <img src={Logo}></img>
      <h2>Hours</h2>
      <h2>About</h2>
      <h2>Gallery</h2>
      <div className="social">
        <h4>FB</h4>
        <h4>TWT</h4>
        <h4>IG</h4>
      </div>
    </header>
  )
}