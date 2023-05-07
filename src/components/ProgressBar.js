import { CProgress, CProgressBar } from "@coreui/react";

const ProgressBar = ({ progress, val, totalQ }) => {
  return (
    <CProgress className="mb-3">
      {progress.map((color, index) => {
        return (
          <CProgressBar key={index} value={val} color={color}>
            {`${index + 1}/${totalQ}`}
          </CProgressBar>
        );
      })}
    </CProgress>
  );
};

export default ProgressBar;
