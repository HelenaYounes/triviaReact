import { CContainer, CBadge } from "@coreui/react";

const Score = ({ score, text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <h1>
        <CBadge color="secondary">{score}</CBadge>
      </h1>
    </div>
  );
};

export default Score;
