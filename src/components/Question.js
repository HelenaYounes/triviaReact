import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { CCallout, CListGroup, CListGroupItem, CButton } from "@coreui/react";

let pick;
let ans;
const Question = ({ state, dispatch }) => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [selection, setSelection] = useState();
  const question = state.newQuiz.questions[currentQ];

  useEffect(() => {}, [currentQ, selection]);

  const isCorrect = (e) => {
    if (!selection) {
      const idSelection = e.target.getAttribute("id");
      pick = document.getElementById(idSelection);
      if (e.target.innerHTML === question.answer) {
        ans = "success";
      } else {
        ans = "danger";
      }
      pick.classList.add(`list-group-item-${ans}`);
      setSelection(e.target);
    }
  };

  const nextQuestion = () => {
    if (selection) {
      setSelection(null);
      pick.classList.remove(`list-group-item-${ans}`);
      if (currentQ < state.newQuiz.questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        navigate("/");
      }
    }
  };

  // const [quiz, setQuiz] = useState({
  //   questions: questions,
  //   score: currentScore,
  // });
  // const [stateQ, setStateQ] = useState({
  //   commencingState,
  // });

  // const choiceHandler = (e) => {
  //   if (!stateQ.isSelected) {
  //     if (e.target.innerHTML === answer) {
  //       pick = "success";
  //       updateCurrentScore();
  //     } else pick = "danger";
  //     setStateQ({
  //       ...stateQ,
  //       idPicked: e.target.attributes.id.value,
  //       isSelected: true,
  //       colorAns: pick,
  //     });
  //   }
  // };

  // const nextQuestion = () => {
  //   if (stateQ.isSelected) {
  //     updateResults(pick);
  //     quiz.score = currentScore;
  //     setQuiz(quiz);
  //     setStateQ({ ...commencingState });
  //     if (currentQ < limit - 1) {
  //       updateCurrentQ();
  //     } else {
  //       dispatch({
  //         type: "increaseTotalScore",
  //         payload: { totalScore: totalScore + currentScore },
  //       });
  //       dispatch({
  //         type: "updateQuizzes",
  //         payload: { quizzes: [...quizzes, quiz] },
  //       });
  //       navigate("/");
  //     }
  //   }
  // };
  return (
    <div>
      <h1>{question.answer}</h1>
      <CCallout color="primary">{question.question}</CCallout>
      <CListGroup>
        {question.choices.map((choice, index) => {
          return (
            <CListGroupItem
              key={index}
              id={Math.random() * 1000}
              onClick={isCorrect}
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

    // <div>
    //   <ProgressBar
    //     results={results}
    //     val={Math.floor(100 / limit)}
    //     totalQ={limit}
    //   />

    // </div>
  );
};

export default Question;
