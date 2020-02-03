import React from 'react';
import Twitter from '../assests/twittericon.png'
import Facebook from '../assests/fbicon.png'
import Instagram from '../assests/igicon.png'

export default function Header() {
  return (
    <footer>
      <div id='reservations'>
        <h1>What are you waiting for? <br /> Book Now!</h1>
        <button>RESERVATION</button>
      </div>
      <p>© 2020 <br /> Developed by Ash Rahman, Abir Tawfique, Sam Weinstein. <br /> Designed by Shanshan Wang, Yanli Yin, Josh Yu. <br /> All rights reserved.</p>
      <div className="social social-bottom">
        <img src={Facebook}></img>
        <img src={Twitter}></img>
        <img src={Instagram}></img>
      </div>

    </footer>
  )
}
