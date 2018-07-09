
//correct post question

import React, { Component } from 'react';
class PostQuestions extends Component {
    post = (e) => {
        e.preventDefault();

        const subject = e.target.subject.value;
        const question = e.target.question.value;

        const newQuestion = { subject, question };

        const storedQuestions = localStorage.getItem("questions");
        const questions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];
        questions.push(newQuestion);
        localStorage.setItem("questions", JSON.stringify(questions));
    }

    render() {
        return (
            <div className="container">
                <form name="post" onSubmit={this.post}>
                    <h3>Post Question</h3>
                    <br /><br />
                    <label htmlFor="subject">Subject</label>
                    <input name="subject" type="text" className="form-control" />

                    <br />
                    <label htmlFor="question">Question</label>
                    <textarea name="question" className="form-control"></textarea>

                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostQuestions;
