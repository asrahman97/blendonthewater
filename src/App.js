import React from 'react';
import './App.css';
import About from './components/about'
import InfoBar from './components/infoBar'
import Gallery from './components/gallery'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >

        <InfoBar />
        <About />
        <Gallery />
      
        
      </div>
    );
  }

}

export default App;
