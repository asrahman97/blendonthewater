import React from 'react';
import './App.css';
import About from './components/about'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >

        <About />
      
        
      </div>
    );
  }

}

export default App;
