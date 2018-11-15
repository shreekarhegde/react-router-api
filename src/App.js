import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from '../src/components/users';
import Details from '../src/components/details';

const Index = () => (<h2> Home </h2>)

const AppRouter = () => (
  <Router>
    <div>
      <nav>
      <Link to="/"> Home </Link> |
      <Link to="/users"> Users </Link> <br/>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/users"  render={(props) => <Users/>}exact/>
      <Route path="/users/:id" component={Details} exact/>
      </div>
  </Router>
)

export default AppRouter; 