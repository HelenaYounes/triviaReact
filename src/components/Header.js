import Score from "./Score";
import { CHeader, CContainer } from "@coreui/react";

const Header = ({ score, text }) => {
  return (
    <CHeader>
      <CContainer fluid>
        <h1>{text}</h1>
        <Score score={score} />
      </CContainer>
    </CHeader>
  );
};

export default Header;
