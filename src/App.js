
import React, { Component } from 'react';
import './App.css';
import { GlobalStateProvider } from './store/globalState'
import { GlobalStateProvider as ReducerGlobalStateProvider } from './store/store';
import { BrowserRouter } from 'react-router-dom'
import ApplicationRoutes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <GlobalStateProvider>
            <ReducerGlobalStateProvider>
              <ApplicationRoutes></ApplicationRoutes>
            </ReducerGlobalStateProvider>
          </GlobalStateProvider>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
