import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CProgress, CProgressBar, CCallout, CListGroup, CListGroupItem, CButton } from "@coreui/react";
import Score from "./Score";

const Questions = ({ questions, totalScore, dispatch }) => {
  const navigate = useNavigate();
  const commencingState = {
    idPicked: null,
    isSelected: false,
    colorAns: "light",
  };
  const [currentScore, setCurrentScore] = useState(0);
  const [stateQ, setStateQ] = useState({
    commencingState,
    score: currentScore,
  });
  const [currentQ, setCurrentQ] = useState(0);

  const question = questions[currentQ].question;
  const answer = questions[currentQ].correctAnswer;
  const incorrects = questions[currentQ].incorrectAnswers;
  const choices = [...incorrects, answer].sort();

  const progress = useRef(0);


  const choiceHandler = (e) => {
    let pick = "light";
    let point = 0;
    if (!stateQ.isSelected) {
      if (e.target.innerHTML === answer) {
        pick = "success";
        point = 1;
      } else pick = "danger";
    }

    setStateQ({
      ...stateQ,
      idPicked: e.target.attributes.id.value,
      isSelected: true,
      colorAns: pick,
      score: stateQ.score + point,
    });
  };

  const nextQuestion = () => {
    let points = stateQ.score;
    setCurrentScore(points);
    setStateQ({ ...commencingState, score: points });
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      progress.current += 1;
    } else {
      dispatch({
        type: "increaseTotalScore",
        payload: { totalScore: totalScore + points },
      });
      navigate("/home");
    }
  };

  return (
    <div>
      <Score score={stateQ.score} />
      <CProgress className="mb-3">
         <CProgressBar value={(progress.current/questions.length)*100}>{(progress.current/questions.length)*100}%</CProgressBar>
      </CProgress>
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
