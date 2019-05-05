import { EventEmitter } from "events";

class QuestionModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                title: "I have questions",
                username: "ioana33",
                text: "How are you?",
                tag: "ask",
                date: "3/4/2019, 4:56:10 PM	",
                answers: []
            }, {
                title: "More questions",
                username: "antonia000",
                text: "What is your name?",
                tag: "ask",
                date: "4/4/2019, 5:56:10 PM	",
                answers: []
            }],
            newQuestion: {
                title: "",
                username: "",
                text: "",
                tag: "",
                date: "",
                answers: []
            },
            newAnswer: {
                username: "",
                text: "",
                date: ""
            },
            filteredQuestions: [],
            filterTitle: "",
            filterTag: ""
        };
    }

    getDate() {
        var date = new Date();
        return date.toLocaleString();
    }

    changeFilteredQuestions() {
        this.state = {
            ...this.state,
            filteredQuestions: []
        };
        this.emit("change", this.state);
    }

    filterByTitle() {
        var i;
        this.changeFilteredQuestions()
        for (i = 0; i < this.state.questions.length; i++) {
            if (this.state.questions[i].title === this.state.filterTitle) {
                this.state = {
                    ...this.state,
                    filteredQuestions: this.state.filteredQuestions.concat(this.state.questions[i])
                };
            }
        }
    }

    filterByTag() {
        var i;
        this.changeFilteredQuestions()
        for (i = 0; i < this.state.questions.length; i++) {
            if (this.state.questions[i].tag === this.state.filterTag) {
                this.state = {
                    ...this.state,
                    filteredQuestions: this.state.filteredQuestions.concat(this.state.questions[i])
                };
            }
        }
    }

    addQuestion(title, username, text, tag) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                title: title,
                username: username,
                text: text,
                tag: tag,
                date: this.getDate()
            }])
        };
        this.emit("change", this.state);
    }

    getQuestionIndex(questionTitle, questionUsername, questionText) {
        var index;
        var i;
        for (i = 0; i < this.state.questions.length; i++) {
            if (this.state.questions[i].title === questionTitle && this.state.questions[i].username === questionUsername && this.state.questions[i].text === questionText) {
                index = i;
            }
        }
        return index;
    }

    addAnswer(questionTitle, questionUsername, questionText, username, text) {
        var index = this.getQuestionIndex(questionTitle, questionUsername, questionText);
        this.state.questions[index].answers = this.state.questions[index].answers.concat([{
            username: username,
            text: text,
            date: this.getDate()
        }]);
        this.emit("change", this.state);
    }


    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeNewAnswerProperty(property, value) {
        this.state = {
            ...this.state,
            newAnswer: {
                ...this.state.newAnswer,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeFilterProperty(property, value) {
        this.state = {
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }
}

const questionModel = new QuestionModel();

export default questionModel;