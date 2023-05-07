import { useState, useEffect } from "react";
import { CCallout, CListGroup, CListGroupItem, CButton } from "@coreui/react";

let pick;
let ans;
const Question = ({
  state,
  dispatch,
  currentQ,
  next,
  updateProgress,
  increaseScore,
}) => {
  const [selection, setSelection] = useState();
  const question = state.newQuiz.questions[currentQ];

  useEffect(() => {}, [selection]);

  const isCorrect = (e) => {
    if (!selection) {
      const idSelection = e.target.getAttribute("id");
      pick = document.getElementById(idSelection);
      if (e.target.innerHTML === question.answer) {
        ans = "success";
        increaseScore();
      } else {
        ans = "danger";
      }
      pick.classList.add(`list-group-item-${ans}`);
      updateProgress(ans);
      setSelection(e.target);
    }
  }

  const nextQ = () => {
    if (selection) {
      setSelection(null);
      pick.classList.remove(`list-group-item-${ans}`);
      next();
    }
  }

  return (
    <div>
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
      <CButton color="dark" variant="outline" onClick={nextQ}>
        Next question
      </CButton>
    </div>
  );
};

export default Question;
