import React from 'react'
import Logo from '../assests/blendlogo.png'
import Twitter from '../assests/twittericon.png'
import Facebook from '../assests/fbicon.png'
import Instagram from '../assests/igicon.png'

export default function Header() {
  return (
    <header>
      <div className="header-section">
        <h2>Home</h2>
        <h2>Reservation</h2>
        <h2>Menu</h2>
      </div>
      <img src={Logo}></img>
      <div className="header-section">
        <h2>Hours</h2>
        <h2>About</h2>
        <h2>Gallery</h2>
      </div>
      <div className="social">
        <img src={Facebook}></img>
        <img src={Twitter}></img>
        <img src={Instagram}></img>
      </div>
    </header>
  )
}