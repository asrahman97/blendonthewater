import React from 'react';
import './App.css';
import About from './components/about'
import InfoBar from './components/infoBar'
import Gallery from './components/gallery'
import GalleryGrid from './components/galleryGrid'
import Map from './components/Map'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/footer'
import MobileGallery from './components/mobileGallery'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <div id="video">
          <iframe
            id="ytplayer"
            src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL9CSmGF_Y-0bnYfzXYKZ42f-HY2lRAWLd&autoplay=1&loop=1&controls=0&mute=1"
            frameborder="0">
          </iframe>
          <div id="video-text">
            <h1>A special evening by the water.</h1>
            <a href='#reservations'><button>RESERVATIONS</button></a>
          </div>
        </div>
        <Menu />
        <InfoBar />
        <About />
        <Gallery />
        <MobileGallery />
        <GalleryGrid />

        <div id="location" >
          <h2>LOCATION</h2>
          <p>Our restaurant is located by the Long Island City ferry along the East River.
10 minutes walk from nearby subway station, 5 minutes walk from nearby Q69 bus station.
We reccomend you to share a ride with your friends and family. </p>
          <br />
          <p>
            718-606-9851<br />
            4540 Center Blvd. Long Island City NY 11101 <br />
          </p>
        </div>
        <Map />
        <Footer />
      </div >
    );
  }

}

export default App;
