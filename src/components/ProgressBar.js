import { CProgress, CProgressBar } from "@coreui/react";

const ProgressBar = ({ results, val, totalQ }) => {
  return (
    <CProgress className="mb-3">
      {results.map((res, index) => {
        return (
          <CProgressBar key={index} value={val} color={res}>
            {`${index + 1}/${totalQ}`}
          </CProgressBar>
        );
      })}
    </CProgress>
  );
};

export default ProgressBar;
