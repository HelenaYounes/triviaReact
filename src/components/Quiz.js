import { useState } from "react";
import { useQuizContext } from "../context/QuizContext";
import Questions from "./Questions";
import Header from "./Header";

const Quiz = (props) => {
  const {state, dispatch} = useQuizContext();
  const [results, setResults] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const question = state.newQuiz.questions[currentQ].question;
  const answer = state.newQuiz.questions[currentQ].correctAnswer;
  const incorrects = state.newQuiz.questions[currentQ].incorrectAnswers;
  const choices = [...incorrects, answer].sort();
  const updateCurrentQ = () => {
    setCurrentQ(currentQ + 1);
  };

  const updateResults = (color) => {
    setResults((results) => [...results, color]);
  };
  const updateCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  return (
    <div>
    
      <Header score={currentScore} text="Current Score" />
      <Questions
        quizzes={state.quizzes}
        // questions={questions}
        updateResults={updateResults}
        results={results}
        currentScore={currentScore}
        updateCurrentScore={updateCurrentScore}
        updateCurrentQ={updateCurrentQ}
        currentQ={currentQ}
        question={question}
        answer={answer}
        choices={choices}
        totalScore={props.totalScore}
        dispatch={dispatch}
        limit={state.newQuiz.limit}
      />
    </div>
  );
};

export default Quiz;
