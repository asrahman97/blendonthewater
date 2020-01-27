import React from 'react';
import './App.css';
import Map from './components/Map'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >
        <div id = "location" >
          <h2>Location</h2>
        </div>
        <Map />
      </div>
    );
  }

}

export default App;
