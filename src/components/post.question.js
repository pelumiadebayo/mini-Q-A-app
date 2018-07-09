import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class PostQuestions extends Component {
  constructor(props) {
    super(props);
    this.post = this.post.bind(this);
    this.setOfQuestion = this.setOfQuestion.bind(this)
    this.state = {
      question: "",
      options: [],
      show: false
    }
  }
  co
  post = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const subject = e.target.subject.value;
    const question = e.target.question.value;
    const answer = e.target.answer.value;
    const opt1 = e.target.opt1.value;
    const opt2 = e.target.opt2.value;
    const opt3 = e.target.opt3.value;
    let dOptions = [answer, opt1, opt2, opt3];
    const { options, ans } = this.shuffle(dOptions);

    const newQuestion = { name, subject, question, options, ans };
    const storedQuestions = localStorage.getItem("questions");
    const questions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];
    questions.push(newQuestion);
    localStorage.setItem("questions", JSON.stringify(questions));
    this.setState(
      {
        question, options
      }
    )
  }

  shuffle(options) {
    const ans = options[0]
    var j, x, i;
    for (i = options.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = options[i];
      options[i] = options[j];
      options[j] = x;
    }
    const obj = {
      options,
      ans
    };
    return obj;
  }

  setOfQuestion = () => {
    this.setState({ show: true, })
  }

  render() {
    return (
      <div className="container">
        <form name="post" onSubmit={this.post}>
          <h3>Post Question</h3>
          <br /><br />

          <div>
            <ul style={{
              "display": (this.state.show) ? "block" : "none"
            }}>
              <li>
                <p>{this.state.question}</p>
                <button className="mr-3" disabled="disabled">a: {this.state.options[0]}</button>
                <button className="mr-3" disabled="disabled">b: {this.state.options[1]}</button>
                <button className="mr-3" disabled="disabled">c: {this.state.options[2]}</button>
                <button className="mr-3" disabled="disabled">d: {this.state.options[3]}</button>
              </li>
            </ul>
          </div>

          <br />
          <label htmlFor="name">Name</label>
          <input name="name" type="text" placeholder='You Name Here' />
          <label htmlFor="subject">Subject</label>
          <input name="subject" type="text" placeholder='Subject' />

          <br /><br />
          <label htmlFor="question">Question</label>
          <input name="question" type="text" className="form-control" />


          <br />
          <input name='answer' type="text" placeholder='Answer' />
          <input name='opt1' type="text" placeholder='option 1' />
          <input name='opt2' type="text" placeholder='option 2' />
          <input name='opt3' type="text" placeholder='option 3' />

          <br /><br />
          <button type="sumit" className="btn btn-secondary" onClick={this.setOfQuestion} >sumit</button>
        </form>

      </div>
    );
  }
}

export default PostQuestions;