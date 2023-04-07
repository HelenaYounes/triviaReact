import { CProgress, CProgressBar } from "@coreui/react";

const ProgressBar = (results) => {
  return (
    <CProgress className="mb-3">
      {results.results.map((res, index) => {
        return <CProgressBar key={index} value={10} color={res} />;
      })}
    </CProgress>
  );
};

export default ProgressBar;
