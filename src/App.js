import React, { Component } from 'react';
import './App.css';
import HomeComponent from './containers/ImagesList';
import { GlobalStateProvider } from './store/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStateProvider>
          <HomeComponent></HomeComponent>
        </GlobalStateProvider>
      </div>
    );
  }
}

export default App;
