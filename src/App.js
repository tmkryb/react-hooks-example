import React, { Component } from 'react';
import './App.css';
import { GlobalStateProvider } from './store/store'
import { BrowserRouter } from 'react-router-dom'
import ApplicationRoutes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStateProvider>
          <BrowserRouter>
            <ApplicationRoutes></ApplicationRoutes>
          </BrowserRouter>
        </GlobalStateProvider>
      </div>
    );
  }
}

export default App;
