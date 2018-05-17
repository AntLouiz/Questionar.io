import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import HomePage from '../pages/HomePage.js';
import CreatePage from '../pages/CreatePage.js';
import ListPage from '../pages/ListPage.js';
import DetailPage from '../pages/DetailPage.js';
import NotFoundPage from '../pages/NotFoundPage.js';
import Menu from './Menu.js';

const AppRouter = () => (
  <Router>
    <div>
      <Menu />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={CreatePage} />
        <Route exact path="/list" component={ListPage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  </Router>
);


export default AppRouter