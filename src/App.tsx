import React from 'react';
import './App.css';
import WebSocket, {WebSocketObject} from "./webSocket";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './scenes/home';
import Lobby from './scenes/lobby';

const App = () => {
  const WebSocketObject: WebSocketObject = WebSocket();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/'} exact>
            <Home WebSocket={WebSocketObject} />
          </Route>

          <Route path={'/lobby'} exact>
            <Lobby WebSocket={WebSocketObject} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
