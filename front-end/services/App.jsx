// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from '../components/BlogList';
import BlogDetail from '../components/BlogDetail';
import NewBlogForm from '../components/NewBlogForm';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute exact path="/" component={BlogList} />
        <PrivateRoute path="/blogs/:id" component={BlogDetail} />
        <PrivateRoute path="/new-blog" component={NewBlogForm} />
      </Switch>
    </Router>
  );
}

export default App;
