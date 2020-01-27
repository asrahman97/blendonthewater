import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import div2 from "../assests/home-background-5.jpg";
import div3 from "../assests/home-background-7.jpg";
import div4 from "../assests/home-background-1.jpg";
import div5 from "../assests/home-background-3.jpg";
import div6 from "../assests/home-background-6.jpg";
import div7 from "../assests/home-background-8.jpg";
import div8 from "../assests/home-background-2.jpg";
import div10 from "../assests/home-background-9.jpg";

class MobileGallery extends Component {
  render() {
    return (
      <div className='mobile-gallery-section'>
        <Carousel
          autoPlay
        >
                <div>
                    <img src={div2} />
                </div>
                <div>
                    <img src={div3} />
                </div>
                <div>
                    <img src={div4} />
                </div>
                <div>
                    <img src={div5} />
                </div>
                <div>
                    <img src={div6} />
                </div>
                <div>
                    <img src={div7} />
                </div>
                <div>
                    <img src={div8} />
                </div>
                <div>
                    <img src={div10} />
                </div>
            </Carousel>
      </div>
    )
  }
}

export default MobileGallery;