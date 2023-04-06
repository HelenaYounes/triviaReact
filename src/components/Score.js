import { CBadge } from "@coreui/react";

const Score = ({ score, text }) => {
  return (
    <h1>{text}
      <CBadge color="secondary">{score}</CBadge>
    </h1>
  );
};

export default Score;
