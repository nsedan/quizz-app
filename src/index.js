import React, { Component } from "react";
import ReactDOM from 'react-dom'
import "./assets/style.css";
import quizDB from './quizDB';
import QuestionBox from './components/QuestionBox'
import Result from './components/Result'

class Quizzer extends Component {
    state = {
        questionsDB: [],
        score: 0,
        responses: 0
    };
    getQuestions = () => {
        quizDB().then(question => {
            this.setState({
                questionsDB: question
            })
        })
    }
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }
    playAgain = () =>{
        this.getQuestions();
        this.setState({
            score: 0,
            responses:0
        })
    }
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        return (
            <div className='container'>
                <div className='title'>Quizzer</div>
                {this.state.questionsDB.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionsDB.map(
                        ({ question, answers, correct, questionID }) =>
                            <QuestionBox
                                question={question}
                                options={answers}
                                key={questionID}
                                selected={answer => this.computeAnswer(answer, correct)}
                            />
                    )
                }
                {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
            </div>
        );
    }
}

ReactDOM.render(<Quizzer />, document.getElementById('root'));