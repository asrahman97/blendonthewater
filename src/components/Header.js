import React from 'react'
import Logo from '../assests/blendlogo.png'
import Twitter from '../assests/twittericon.png'
import Facebook from '../assests/fbicon.png'
import Instagram from '../assests/igicon.png'
import { slide as Menu } from 'react-burger-menu'


export default function Header() {
  return (
    <div>
      <Menu>
        <img src={Logo} className="bm-logo"></img>
        <a className="menu-item" href="#video">Home</a>
        <a className="menu-item" href="#menu">Menu</a>
        <a className="menu-item" href="#info">Hours</a>
        <a className="menu-item" href="#about">About</a>
        <a className="menu-item" href="#gallery">Gallery</a>
        <a className="menu-item" href="#reservations">Reservations</a>
        <p className="bm-credits"><span className="underlined">Developed by</span> <br /> Ash Rahman <br /> Abir Tawfique <br /> Sam Weinstein. <br /> <span className="underlined">Designed by </span><br />Shanshan Wang <br /> Yanli Yin <br /> Josh Yu.</p>
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
