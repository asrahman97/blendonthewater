import React, { Component } from "react";

class InfoBar extends Component {
  render() {
    return (
      <div className="infobar">
        <div className="infobar-address">
          {/* <img src={Location} alt="" className="info-image" /> */}
          <h3 className="infobar-title">Contact Us</h3>
          <h3 className="infobar-h3">
            4540 Center Blvd. <br className="add-break" />
            Long Island City, NY, 11101 <br className="add-break" />
            *Menu and Prices Subject to Change Without Notice*{" "}
            <h3 className="infobar-pn">718-606-9851</h3>
          </h3>
        </div>
        <div className="infobar-hours" id="hours">
          {/* <img src={Hours} alt="" className="info-image" /> */}
          <h3 className="infobar-title">Hours</h3>
          <h3 className="infobar-h3">BRUNCH 11:00AM to 3:30PM</h3>
          <h3 className="infobar-h3">MIDDAY 3:30PM to 5:00PM</h3>
          <h3 className="infobar-h3">DINNER 5:00PM to 11:00PM</h3>
        </div>
        <div className="infobar-dresscode">
          {/* <img src={Dresscode} alt="" className="info-image" /> */}
          <h3 className="infobar-title">Dress Code</h3>
          <h3 className="infobar-h3">
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
    );
  }
}

export default InfoBar;
