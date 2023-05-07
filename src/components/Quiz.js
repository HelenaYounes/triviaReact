import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";
import Header from "./Header";
import Question from "./Question";
import ProgressBar from "./ProgressBar";

const Quiz = () => {
  const { state, dispatch } = useQuizContext();
  const [currentQ, setCurrentQ] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [progress, setProgress] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {}, [currentQ]);

  const nextQuestion = () => {
    if (currentQ < state.newQuiz.limit - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      let quiz = { ...state.newQuiz, score: currentScore };
      let quizzesList = [...state.quizzes, quiz];
      quizzesList = JSON.stringify(quizzesList);
      localStorage.clear();
      localStorage.setItem("quizzes", quizzesList);

      dispatch({
        type: "updateQuizzes",
        payload: { quizzes: [...state.quizzes, quiz] },
      });
      navigate("/");
    }
  };

  const increaseScore = () => setCurrentScore(currentScore + 1);

  const updateProgress = (ans) => {
    setProgress([...progress, ans]);
  };

  return (
    <div>
      <Header score={currentScore} text="Current Score" />
      <ProgressBar
        progress={progress}
        val={Math.floor(100 / state.newQuiz.limit)}
        totalQ={state.newQuiz.limit}
      />
      <Question
        state={state}
        dispatch={dispatch}
        currentQ={currentQ}
        next={nextQuestion}
        updateProgress={updateProgress}
        increaseScore={increaseScore}
      />
    </div>
  );
};

export default Quiz;
