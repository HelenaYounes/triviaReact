import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import {CCallout, CListGroup, CListGroupItem, CButton } from "@coreui/react";

let pick = "light";
const Questions = ({
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


  const [stateQ, setStateQ] = useState({
    commencingState
  });

  const choiceHandler = (e) => {
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
    setStateQ({ ...commencingState });
    if (currentQ < limit - 1) {
      updateCurrentQ();
    } else {
      dispatch({
        type: "increaseTotalScore",
        payload: { totalScore: totalScore + currentScore },
      });
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
