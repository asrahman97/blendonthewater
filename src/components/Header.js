import React from 'react'
import { slide as Menu } from 'react-burger-menu'

import Logo from '../assests/blendlogo.png'
import Twitter from '../assests/twittericon.png'
import Facebook from '../assests/fbicon.png'
import Instagram from '../assests/igicon.png'

export default function Header() {
  return (
    <div>
      <Menu>
        <h2><a href="#video">Home</a></h2>
        <h2><a href="#menu">Menu</a></h2>
        <h2><a href="#info">Hours</a></h2>
        <h2><a href="#about">About</a></h2>
        <h2><a href="#gallery">Gallery</a></h2>
        <h2><a href="#reservations">Reservation</a></h2>

      </Menu>
      <header>

        <div className="header-section">
          <h2><a href="#video">Home</a></h2>
          <h2><a href="#reservations">Reservation</a></h2>
          <h2><a href="#menu">Menu</a></h2>
        </div>
        <img src={Logo}></img>
        <div className="header-section">
          <h2><a href="#info">Hours</a></h2>
          <h2><a href="#about">About</a></h2>
          <h2><a href="#gallery">Gallery</a></h2>
        </div>
        <div className="social">
          <img src={Facebook}></img>
          <img src={Twitter}></img>
          <img src={Instagram}></img>
        </div>
      </header>
    </div>
  )
}
