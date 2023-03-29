import Score from "./Score";
import { CHeader, CContainer } from "@coreui/react";


const Header = ({score}) => {
    
    return(
    <CHeader>
      <CContainer fluid>
      <h1>Welcome to Trvia Game</h1>
            <Score score={score} />
      </CContainer>
        </CHeader>
    );
}

export default Header;