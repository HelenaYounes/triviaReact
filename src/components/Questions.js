import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CCallout, CListGroup, CListGroupItem } from "@coreui/react";
import Score from "./Score";

const Questions = ({ questions, totalScore, dispatch }) => {
  const navigate = useNavigate();
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const question = questions[currentQ].question;
  const answer = questions[currentQ].correctAnswer;
  const incorrects = questions[currentQ].incorrectAnswers;
  const choices = [...incorrects, answer];

  const checkAnswer = (e) => {
    e.target.setAttribute("active", true);
    if (e.target.innerHTML === answer) {
      e.target.setAttribute("color", "success");
      dispatch({
        type: "increaseTotalScore",
        payload: { totalScore: totalScore + 1 },
      });
      setCurrentScore(currentScore + 1);
    } else {
      e.target.setAttribute("color", "danger");
      console.log(e);
    }
    currentQ < questions.length - 1
      ? setCurrentQ(currentQ + 1)
      : navigate("/home");
  };

  return (
    <div>
      <h1>
        Current score:
        <Score score={currentScore} />
      </h1>
      <CCallout color="primary">{question}</CCallout>
      <CListGroup>
        {choices.map((choice) => {
          return (
            <CListGroupItem
              key={Math.random()}
              component="button"
              onClick={(e) => checkAnswer(e)}
            >
              {choice}
            </CListGroupItem>
          );
        })}
      </CListGroup>
    </div>
  );
};

export default Questions;
