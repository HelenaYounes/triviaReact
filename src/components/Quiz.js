import { useState, useRef } from "react";
import Questions from "./Questions";
import Header from "./Header";
import { CProgress, CProgressBar} from "@coreui/react";

const Quiz = ({questions, totalScore, dispatch}) => {
    
  const [currentQ, setCurrentQ] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const question = questions[currentQ].question;
  const answer = questions[currentQ].correctAnswer;
  const incorrects = questions[currentQ].incorrectAnswers;
  const choices = [...incorrects, answer].sort();

  const updateCurrentQ = (newScore) => {
    setCurrentQ(currentQ+1)
  }

  const updateCurrentScore = () => {
    setCurrentScore(currentScore+1)
  }
  const progress = useRef(0)
    return (
        <div>
            <Header score={totalScore} text="your total score:"/>
            <CProgress className="mb-3">
                <CProgressBar value={(progress.current/questions.length)*100}>{(progress.current/questions.length)*100}%</CProgressBar>
            </CProgress>
            <Questions currentScore={currentScore} updateCurrentScore={updateCurrentScore} updateCurrentQ={updateCurrentQ} currentQ={currentQ} question={question} answer={answer} choices={choices} totalScore={totalScore} dispatch={dispatch} limit={questions.length}/>
        </div>
    );
}

export default Quiz;