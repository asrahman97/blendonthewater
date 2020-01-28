import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import dressCode from '../assests/dress-code-web.svg';
import group from '../assests/group-web.svg';
import hour from '../assests/hour-web.svg';

// const contact = <FontAwesomeIcon icon={faPhone} />;
// const hours = <FontAwesomeIcon icon={faClock} />;
// const dresscode = <FontAwesomeIcon icon={faTshirt} />;

class InfoBar extends Component {
  render() {
    return (
      <div className="infobar" id="info">
        <div className="infobar-address">
          <div className="logo-name-wrapper">
            {/*<span className="icon-fa">{contact}</span>*/}
            <img className="icon" src={dressCode}></img>
            <h3 className="infobar-title">Contact Us</h3>
          </div>
          <div className="hours-wrapper">
            <h3 className="infobar-h3" id="address-info">
              4540 Center Blvd. <br className="add-break" />
              Long Island City, NY, 11101 <br className="add-break" />
              *Menu and Prices Subject to Change Without Notice*{" "}
              <h3 className="infobar-pn">718-606-9851</h3>
            </h3>
          </div>
        </div>
        <div className="infobar-hours" id="hours">
          <div className="logo-name-wrapper" id="logo-name-hours">
            {/*<span className="icon-fa">{hours}</span>{" "}*/}
            <img className="icon" id="hours-icon" src={group}></img>
            <h3 className="infobar-title" id="hours-title">Hours</h3>
          </div>
          <div className="hours-wrapper">
            <h3 className="infobar-h3">BRUNCH 11:00AM to 3:30PM</h3>
            <h3 className="infobar-h3">MIDDAY 3:30PM to 5:00PM</h3>
            <h3 className="infobar-h3">DINNER 5:00PM to 11:00PM</h3>
          </div>
        </div>
        <div className="infobar-dresscode">
          <div className="logo-name-wrapper">
            {/*<span className="icon-fa">{dresscode}</span>{" "}*/}
            <img className="icon" src={hour}></img>
            <h3 className="infobar-title">Dress Code</h3>
          </div>
          <div className="hours-wrapper">
            <h3 className="infobar-h3" id="dress-code">
              No Tank Tops
            <br className="add-break" />
              No White T-Shirts
            <br className="add-break" />
              No Hats
            <br className="add-break" />
              No Athletic Attire
            <br className="add-break" />
              WE ARE UNABLE TO MAKE ANY EXCEPTIONS
          </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoBar;
