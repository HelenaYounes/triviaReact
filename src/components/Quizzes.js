import { useQuizContext } from '../context/QuizContext';
import { CCard, CCardTitle, CCardBody ,CCardHeader, CCardText,CButton} from '@coreui/react';

const Quizzes = () => {
  const {state} = useQuizContext();
  return(
  state.quizzes.map((quiz, index) => {
    return (
      <CCard>
      <CCardHeader>Quiz #{index}</CCardHeader>
      <CCardBody>
        <CCardTitle>Category: {quiz.category} Difficulty: {quiz.difficulty}</CCardTitle>
        <CCardText>Score: {quiz.score}</CCardText>
        <CButton href="#">Review Quiz</CButton>
      </CCardBody>
    </CCard>
    )
  }))
}

export default Quizzes;