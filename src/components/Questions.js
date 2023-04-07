import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import {CCallout, CListGroup, CListGroupItem, CButton } from "@coreui/react";

let pick = "light";
const Questions = ({
  quizzes,
  questions,
  updateResults,
  results,
  currentScore,
  updateCurrentScore,
  updateCurrentQ,
  currentQ,
  question,
  answer,
  choices,
  totalScore,
  dispatch,
  limit,
}) => {
  const navigate = useNavigate();
  const commencingState = {
    idPicked: null,
    isSelected: false,
    colorAns: "light",
  };

const [quiz, setQuiz] = useState({
  questions: questions,
  score: currentScore

})
  const [stateQ, setStateQ] = useState({
    commencingState
  });

  const choiceHandler = (e) => {
    console.log(quizzes)
    if (!stateQ.isSelected) {
      if (e.target.innerHTML === answer) {
        pick = "success";
        updateCurrentScore();
      } else pick = "danger";
    }

    setStateQ({
      ...stateQ,
      idPicked: e.target.attributes.id.value,
      isSelected: true,
      colorAns: pick,
    });
  };

  const nextQuestion = () => {
    updateResults(pick);
    quiz.score = currentScore;
    setQuiz(quiz)
    setStateQ({ ...commencingState });
    if (currentQ < limit - 1) {
      updateCurrentQ();
    } else {
      dispatch({
        type: "increaseTotalScore",
        payload: { totalScore: totalScore + currentScore },
      });
      dispatch({
        type: "updateQuizzes",
        payload: { quizzes: [...quizzes,quiz]}
      })
      navigate("/home");
    }
  };

  return (
    <div>
     <ProgressBar results={results}/>
      <CCallout color="primary">{question}</CCallout>
      <CListGroup>
        {choices.map((choice, index) => {
          return choice === answer ? (
            <CListGroupItem
              key={index}
              id={index}
              color={
                stateQ.idPicked && index == stateQ.idPicked
                  ? stateQ.colorAns
                  : "light"
              }
              onClick={choiceHandler}
            >
              {choice}
            </CListGroupItem>
          ) : (
            <CListGroupItem
              key={index}
              id={index}
              color={
                stateQ.idPicked && index == stateQ.idPicked
                  ? stateQ.colorAns
                  : "light"
              }
              onClick={choiceHandler}
            >
              {choice}
            </CListGroupItem>
          );
        })}
      </CListGroup>
      <CButton color="dark" variant="outline" onClick={nextQuestion}>
        Next question
      </CButton>
    </div>
  );
};

export default Questions;
