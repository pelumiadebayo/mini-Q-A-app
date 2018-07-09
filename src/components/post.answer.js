import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class PostAnswer extends Component {
  constructor(props) {
    super(props);

    const { location: { state: { questionId } } } = this.props;
    const storedQuestions = localStorage.getItem("questions");
    const questions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];
    let { subject, question, options, ans } = questions[questionId];
    this.state = {
      Question: {
        subject,
        question,
        options,
        ans,

      },
      questionId,
      questions,
      options,
      correct: false,
      show: false
    }
  }

  checkAnswer = (e) => {
    this.setState({ show: true })
    e.preventDefault();
    const chosen = e.target.value;
    if (chosen === this.state.Question.ans) {
      console.log('coret')
      this.setState({ correct: true })
    } else {
      this.setState({ correct: false })
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Subjet: {this.state.Question.subject}</h2>
        <p>{this.state.Question.question}</p>

        <form name="post" >
          <label htmlFor="a"><strong>a:</strong></label>
          <input className="mr-3" type="button" onClick={this.checkAnswer} value={this.state.Question.options[0]} ></input>
          <label htmlFor="b"><strong>b:</strong></label>
          <input className="mr-3" type="button" onClick={this.checkAnswer} value={this.state.Question.options[1]} ></input>
          <label htmlFor="c"><strong>c:</strong></label>
          <input className="mr-3" type="button" onClick={this.checkAnswer} value={this.state.Question.options[2]}></input>
          <label htmlFor="d"><strong>d:</strong></label>
          <input className="mr-3" type="button" onClick={this.checkAnswer} value={this.state.Question.options[3]} ></input>
        </form>

        <div style={{ "display": (this.state.show) ? "block" : "none" }}>
          <Alert bsStyle="warning">
            <strong>{(this.state.correct) ? <p>corect</p> : <p>incorect</p>}</strong>
          </Alert> </div>

      </div>
    );
  }
}
export default PostAnswer;
