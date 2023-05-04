import { CCard, CCardTitle, CCardBody ,CCol, CCardText,CButton} from '@coreui/react';

const Quizzes = ({quizzes}) => {
    return( 
        <CCol sm={6}>
        <CCard>
          <CCardBody>
            <CCardTitle>My Quizzes</CCardTitle>
            <CCardText>
              body
            </CCardText>
            <CButton href="#">Click</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    )
}

export default Quizzes;