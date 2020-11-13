import React from 'react';
import './App.css';
import WebSocket, {WebSocketObject} from "./webSocket/webSocket";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './scenes/home';
import Lobby from './scenes/lobby';
import JoinGame from "./scenes/joinGame/joinGame.scene";

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

          <Route path={'/join'} exact>
            <JoinGame WebSocket={WebSocketObject} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
