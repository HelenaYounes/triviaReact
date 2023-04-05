import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CCallout, CListGroup, CListGroupItem, CButton } from "@coreui/react";
import Score from "./Score";

const Questions = ({ questions, totalScore, dispatch }) => {
  const navigate = useNavigate();
  const commencingState = {
    idPicked: null,
    isSelected: false,
    colorAns: "light",
  };
  const [stateQ, setStateQ] = useState(commencingState);
  const [currentQ, setCurrentQ] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const question = questions[currentQ].question;
  const answer = questions[currentQ].correctAnswer;
  const incorrects = questions[currentQ].incorrectAnswers;
  const choices = [...incorrects, answer].sort();

  const choiceHandler = (e) => {
    let pick = "light";
    if (!stateQ.isSelected) {
      e.target.innerHTML === answer ? (pick = "success") : (pick = "danger");
    }

    setStateQ({
      ...stateQ,
      idPicked: e.target.attributes.id.value,
      isSelected: true,
      colorAns: pick,
    });
  };

  const nextQuestion = () => {
    setStateQ(commencingState);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      dispatch({
        type: "increaseTotalScore",
        payload: { totalScore: totalScore + currentScore },
      });
      setCurrentScore(0);
      navigate("/home");
    }
  };

  return (
    <div>
      <Score score={currentScore} />
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
