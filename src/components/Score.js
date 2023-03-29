import { CBadge } from "@coreui/react";

const Score = ({ score }) => {
  return (
    <h1>
      <CBadge color="secondary">{score}</CBadge>
    </h1>
  );
};

export default Score;
