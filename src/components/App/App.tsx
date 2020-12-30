import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';

import routes from '../../routes';
import NotFoundPage from '../../pages/NotFound';
import Header from '../Header';

const App = () =>  {
  return (
    <Router basename={'/'}>

      <Switch>
        <Route exact path={
          [
            '/', 
            '/movies', 
            '/movies/:id', 
            '/movies/:id/recommend', 
            '/movies/:id/cast', 
            '/movies/:id/reviews', 
            '/tv/:id',
            '/people', 
            '/people/:id', 
            '/my-list'
          ]}>
          <Header/>
        </Route>
      </Switch>
   
      <Switch>
        {
          routes.map(({path, exact, component}, i) => (
            <Route key={i} exact={exact} path={path} component={component}/>
          ))
        }
        <Route path="*" component={NotFoundPage}/>
      </Switch>

    </Router>
  );
}

export default App;
