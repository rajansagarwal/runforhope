import React from "react";
import "./App.css";
import Home from './pages/Home';
import Static from './pages/Static';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
			<Route exact path="/static">
        <Static/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
