import React from 'react';
import Twitter from '../assests/twittericon.png'
import Facebook from '../assests/fbicon.png'
import Instagram from '../assests/igicon.png'

export default function Header() {
  return (
    <footer>
      <div id = 'reservations'>
        <h1>What are you waiting for?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>RESERVATION</button>
      </div>
      <p>© 2020 by Sam Weinstein, Ash Rahman, Abir Tawfique. All rights reserved.</p>
      <div className ="social social-bottom">
        <img src={Facebook}></img>
        <img src={Twitter}></img>
        <img src={Instagram}></img>
      </div>

    </footer>
  )
}
