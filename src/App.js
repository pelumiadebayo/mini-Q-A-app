import React, { Component } from 'react';

import PostQuestion from './components/post.question';
import Questions from './components/questions';
import PostAnswer from './components/post.answer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Questions} />
          <Route path="/answers/:questionId" component={PostAnswer} />
          <Route path="/postquestion" component={PostQuestion} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
