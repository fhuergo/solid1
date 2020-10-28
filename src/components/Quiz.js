import React, {Component} from 'react';
import QuizData from '../data/QuizData';

export default class Quiz extends Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        quizEnd: false,
        answer: '',
        disabled: true,
        optionExplanation: '',
        classNames: [],
        toggleOpen: true
    };

    componentDidMount() {
        this.loadQuiz();
    }

    loadQuiz = () => {
        const {currentQuestion} = this.state;
        this.setState(() => {
            return {
                question: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answer: QuizData[currentQuestion].answer,
                classNames: QuizData[currentQuestion].classNames
            };
        });
    };

    nextQuestionHandler = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
    };

    componentDidUpdate(prevProps, prevState) {
        const {currentQuestion} = this.state;
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    answer: QuizData[currentQuestion].answer,
                    classNames: QuizData[currentQuestion].classNames,
                    optionExplanation: ''
                };
            })
        }
    }

    checkAnswer = userAnswer => {
        this.setState({userAnswer, optionExplanation: userAnswer[1]});
        console.log('currentQuestion', this.state.currentQuestion);
        if (userAnswer[0] === this.state.answer && this.state.currentQuestion !== QuizData.length - 1) {
            this.setState({disabled: false});
        } else {
            this.setState({disabled: true});
        }
    };

    finishHandler = () => {
        if (this.state.currentQuestion === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    };

    toggleHandler = () => {
        this.setState({toggleOpen: !this.state.toggleOpen});
    }

    render() {
        window.onbeforeunload = function() {
            return "Refreshing will bring you back to Question 1. Are you sure you wish to proceed?";
        };

        const {question, options, currentQuestion, quizEnd, optionExplanation, classNames, toggleOpen} = this.state;
        if (quizEnd) {
            return (
                <div>
                    Nice job! You're ready for part 2.
                </div>
            )
        }
        return (
            <div className="app">
                <div align={'center'}>
                    <span>{`Question ${currentQuestion + 1} out of ${QuizData.length}`}</span><br />
                    {question}<br />
                </div>
                <div className="options">
                  <ul>
                    {options.map(option => {
                        return (
                            <li
                                key={option}
                                onClick={() => this.checkAnswer(option)}
                            >
                            {option[0]}
                            </li>
                        );
                    })}
                  </ul>
                </div>
                {optionExplanation}
                <div align={'center'}>
                    {currentQuestion < QuizData.length - 1}
                    <br />
                    <button
                        className="ui inverted button"
                        disabled={this.state.disabled}
                        onClick={this.nextQuestionHandler}
                    >Next</button><br /><br />
                    {currentQuestion === QuizData.length - 1 &&
                        <button onClick={this.finishHandler}>Finish</button>
                    }
                    <br />
                    <button onClick={this.toggleHandler}>Toggle class view</button><br /><br />
                    {toggleOpen && classNames.map(imageName => {
                        return <img key={imageName} src={imageName} className={"photo"} />
                    })}
                </div>
            </div>
        );
    }
}
