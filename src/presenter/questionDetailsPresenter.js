import questionModel from "../model/questionModel";

class QuestionDetailsPresenter {

    onAddAnswer(title, username, text) {
        questionModel.addAnswer(title, username, text, questionModel.state.newAnswer.username, questionModel.state.newAnswer.text);
        questionModel.changeNewAnswerProperty("username", "");
        questionModel.changeNewAnswerProperty("text", "");
        window.location.assign("#/questions-list");
    }

    onChange(property, value) {
        questionModel.changeNewAnswerProperty(property, value);
    }

}

const questionDetailsPresenter = new QuestionDetailsPresenter();

export default questionDetailsPresenter;