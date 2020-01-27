import React from 'react';
import './App.css';
import Map from './components/Map'
import Header from './components/Header'

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
        <div id = "video">
          <iframe
            id="ytplayer"
            src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL9CSmGF_Y-0bnYfzXYKZ42f-HY2lRAWLd&autoplay=1&loop=1&controls=0&mute=1"
            frameborder="0"
          ></iframe>
        </div>
        <div id = "location" >
          <h2>LOCATION</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>9569393392 <br />
            info@realwire.com <br />
          4540 Center Blvd. Long Island City, NY, 11101 <br />
          </p>
        </div>
        <Map />
      </div>
    );
  }

}

export default App;
