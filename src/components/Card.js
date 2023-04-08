import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

const Card = ({quizzes}) => {
    return(
        quizzes.map((quiz, index) => {
        return (
            <CCard key={index}>
              <CCardHeader>category: {quiz.questions[0].category}</CCardHeader>
              <CCardBody>
                <CCardTitle>Score = {quiz.score}</CCardTitle>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          );
    }))
  
};

export default Card;