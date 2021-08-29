import React from "react";
// import axios from 'axios';
// import Movie from './Movie';
// import Home from './routes/Home';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

import "./App.css";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  //  return <Home />;
  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>

    /* <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
     </HashRouter> */
  );
}
export default App;
