import React, { Component } from "react";

import div1 from "../assests/home-background.jpg";
import div2 from "../assests/home-background-5.jpg";
import div3 from "../assests/home-background-7.jpg";
import div4 from "../assests/home-background-1.jpg";
import div5 from "../assests/home-background-3.jpg";
import div6 from "../assests/home-background-6.jpg";
import div7 from "../assests/home-background-8.jpg";
import div8 from "../assests/home-background-2.jpg";
import div9 from "../assests/home-background-4.jpg";
import div10 from "../assests/home-background-9.jpg";

class GalleryGrid extends Component {
  render() {
    return (
      <div className='grid-wrapper'>

        <div className="galleryGrid-section">
          <div className="div1">
            <img src={div1} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div2">
            <img src={div2} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div3">
            <img src={div3} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div4">
            <img src={div4} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div5">
            <img src={div5} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div6">
            <img src={div6} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div7">
            <img src={div7} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div8">
            <img src={div8} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div9">
            <img src={div9} className='gallery-img' />
            <div class="gallery-text">
              <div class="text">Project Title</div>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="div10">
            <img src={div10} className='gallery-img' />
            <div className="gallery-text">
              <button className="see-more-bttn text">See More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryGrid;
