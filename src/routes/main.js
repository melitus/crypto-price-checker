import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import List from '../pages/list/List';
import Detail from '../pages/detail/Detail';
import NotFound from '../pages/notfound/NotFound';


const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/currency/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Main;