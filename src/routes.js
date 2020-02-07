import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Manga from './pages/manga'

import Header from './components/header';

const Routes = () =>{
  return(
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/manga" component={Manga}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;
