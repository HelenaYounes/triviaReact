import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CCallout, CListGroup, CListGroupItem } from "@coreui/react";
import Header from "./Header";

const Questions = ({questions, totalScore, dispatch}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [questionsList, setQuestionsList] = useState(questions || {})
  // const questionsList = questions;
  // const score = location.state.score;
  const score = totalScore;
  const [currentQ, setCurrentQ] = useState(0);
  const question = questionsList[currentQ].question;
  const answer = questionsList[currentQ].correctAnswer;
  const incorrects = questionsList[currentQ].incorrectAnswers;
  const choices = [...incorrects, answer];

  useEffect(()=> {
    console.log(questions);
  },[])

  const checkAnswer = (e) => {
    if (e.target.innerHTML === answer) {
     alert('yes')
    } else {
      alert('no')
    }
    currentQ < questionsList.length - 1
      ? setCurrentQ(currentQ + 1)
      :  navigate("/home");
  };

  return (
    <div>
        <Header score={score}/>
        {console.log(questions)}
      <CCallout color="primary">{question}</CCallout>
      <CListGroup>
        {choices.map((choice) => {
          return (
            <CListGroupItem key={Math.random()}component="button" onClick={(e) => checkAnswer(e)}>
              {choice}
            </CListGroupItem>
          );
        })}
      </CListGroup>
    </div>
  );
};

export default Questions;
