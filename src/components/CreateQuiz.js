import { CFormSelect } from "@coreui/react";

const CreateQuiz = ({ categories, onPickCategory }) => {
  return (
    <CFormSelect
      aria-label="Default select example"
      onChange={(e) => onPickCategory(e.target.value)}
    >
      <option> select a category</option>
      {categories.map((cat, index) => {
        debugger;
        return (
          <option key={index} value={cat}>
            {cat}
          </option>
        );
      })}
    </CFormSelect>
  );
};

export default CreateQuiz;
