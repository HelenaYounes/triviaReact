import { useState } from "react";
import Questions from "./Questions";
import Header from "./Header";
import { CProgress, CProgressBar } from "@coreui/react";

const Quiz = ({ quizzes, questions, totalScore, dispatch }) => {
  const [results, setResults] = useState([])
  const [currentQ, setCurrentQ] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const question = questions[currentQ].question;
  const answer = questions[currentQ].correctAnswer;
  const incorrects = questions[currentQ].incorrectAnswers;
  const choices = [...incorrects, answer].sort();
  const updateCurrentQ = () => {
    setCurrentQ(currentQ + 1);
  };

  const updateResults = (color) => {
    setResults(results => [...results,color]);
  }
  const updateCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  return (
    <div>
    <Header score={currentScore} text="Current Score"/>
      <Questions
      quizzes={quizzes}
        questions={questions}
        updateResults={updateResults}
        results={results}
        currentScore={currentScore}
        updateCurrentScore={updateCurrentScore}
        updateCurrentQ={updateCurrentQ}
        currentQ={currentQ}
        question={question}
        answer={answer}
        choices={choices}
        totalScore={totalScore}
        dispatch={dispatch}
        limit={questions.length}
      />
    </div>
  );
};

export default Quiz;
