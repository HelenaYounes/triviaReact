import Questions from "./Questions";

const Quiz = ({questions, totalScore, dispatch}) => {
    return (
        <Questions questions={questions} totalScore={totalScore} dispatch={dispatch} />
    );
}

export default Quiz;