import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import './App.scss';
import Home from './components/home/Home';
import Movie from './components/movie/Movies';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:id" render={(matchProps) =>
        <Movie
          {...matchProps}
        />
      } />
    </Switch>
  );
}

export default App;
