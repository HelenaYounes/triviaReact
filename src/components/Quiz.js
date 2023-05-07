import { useQuizContext } from "../context/QuizContext";
import Header from "./Header";
import Question from "./Question";

const Quiz = () => {
  const { state, dispatch } = useQuizContext();

  return (
    <div>
      <Header score={state.newQuiz.score} text="Current Score" />
      <Question state={state} dispatch={dispatch} />
    </div>
  );
};

export default Quiz;
