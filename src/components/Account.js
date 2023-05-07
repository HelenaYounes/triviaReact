import { useNavigate } from "react-router-dom";
import { CCard, CCardTitle, CCardBody ,CCardHeader, CCardText,CButton} from '@coreui/react';

const Account = () => {
    const navigate = useNavigate();

    return (
      <CCard>
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
    )
}

export default Account;