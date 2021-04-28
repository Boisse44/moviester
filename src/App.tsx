import React from 'react';
import "react-multi-carousel/lib/styles.css";
import {
  Route,
  Switch
} from "react-router-dom";
import './App.scss';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Movie from './components/movie/Movies';

function App() {
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" render={(matchProps) =>
            <Movie
              {...matchProps}
            />
          } />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
