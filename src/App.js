import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Quotes from './components/Quotes';
import Author from './components/Author';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav><Link to="/">Quotes</Link> | <Link to="/author">Author</Link></nav>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Quotes}/>
            <Route path="/author" component={Author}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
