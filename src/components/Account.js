import { useNavigate } from "react-router-dom";
import { CCard, CCardTitle, CCardBody ,CCol, CCardText,CButton} from '@coreui/react';

const Account = () => {
    const navigate = useNavigate();

    return (
        <CCol sm={6}>
        <CCard>
          <CCardBody>
            <CCardTitle>My Quizzes</CCardTitle>
            <CCardText>
              body
            </CCardText>
            <CButton onClick={()=> navigate("quizzes")}>Click</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    )
}

export default Account;