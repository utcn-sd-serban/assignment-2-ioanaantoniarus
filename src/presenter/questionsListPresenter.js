

class QuestionsListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        window.location.assign("#/question-details/" + index);
    }

    onSearchQuestions() {
        window.location.assign("#/search-questions");
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;