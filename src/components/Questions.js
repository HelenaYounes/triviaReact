import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CCallout, CListGroup, CListGroupItem } from "@coreui/react";

const Questions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const questionsList = location.state.questions;
  const [currentQ, setCurrentQ] = useState(0);
  const question = questionsList[currentQ].question;
  const answer = questionsList[currentQ].correctAnswer;
  const incorrects = questionsList[currentQ].incorrectAnswers;
  const choices = [...incorrects, answer];

  useEffect(() => {}, [currentQ]);

  const checkAnswer = (e) => {
    if (e.target.innerHTML === answer) {
      alert("yes");
    } else {
      alert("no");
    }
    currentQ < questionsList.length - 1
      ? setCurrentQ(currentQ + 1)
      : navigate("/home");
  };

  return (
    <div>
      <CCallout color="primary">{question}</CCallout>
      {console.log(choices)}
      <CListGroup>
        {choices.map((choice) => {
          return (
            <CListGroupItem component="button" onClick={(e) => checkAnswer(e)}>
              {choice}
            </CListGroupItem>
          );
        })}
      </CListGroup>
    </div>
  );
};

export default Questions;
