import { useNavigate } from "react-router-dom";
import {
  CCard,
  CCardTitle,
  CCardBody,
  CCardHeader,
  CCardText,
  CButton,
} from "@coreui/react";

const Account = ({quizzes}) => {
  const navigate = useNavigate();
  return (
    <CCard>
      <CCardHeader>My Quizzes</CCardHeader>
      <CCardBody>
        <CCardTitle>{quizzes.length} quizzes taken</CCardTitle>
        <CCardText>
          Average score: 
        </CCardText>
        <CButton onClick={()=> {navigate("quizzes")}}>Go to quizzes page</CButton>
      </CCardBody>
    </CCard>
  );
};

export default Account;
