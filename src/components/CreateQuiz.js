import { useRef } from "react";

import {
  CForm,
  CRow,
  CCol,
  CFormLabel,
  CButton,
  CFormSelect,
  CFormCheck,
  CFormInput,
} from "@coreui/react";

const CreateQuiz = ({ categoriesList, onPickCategory }) => {
  const quiz = useRef({
    category: null,
    difficulty: null,
    limit: null,
  });

  const difficulties = ["easy", "medium", "hard"];

  const isFormValid = () => {
    return Object.values(quiz.current).every((val) => val !== null);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    quiz.current.limit = e.target.value;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    isFormValid() ? onPickCategory(quiz.current) : alert("fill the form");
  };

  return (
    <CForm onSubmit={onSubmitHandler}>
      <CRow className="mb-3">
        <CFormLabel className="col-sm-2 col-form-label">Categories</CFormLabel>
        <CCol sm={10}>
          <CFormSelect
            aria-label="Default select example"
            onChange={(e) => {
              quiz.current.category = e.target.value;
            }}
          >
            <option> select a category</option>
            {categoriesList.map((cat, index) => {
              return (
                <option key={index} value={cat}>
                  {cat}
                </option>
              );
            })}
          </CFormSelect>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel className="col-sm-2 col-form-label">
          Number of Questions
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="Number of questions"
            id="floatingInputValid"
            floatingClassName="mb-3"
            onChange={onChangeHandler}
          />
        </CCol>
      </CRow>
      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">Difficulty</legend>
        <CCol sm={10}>
          {difficulties.map((diff, index) => (
            <CFormCheck
              key={index}
              type="radio"
              name="gridRadios"
              id={index}
              value={diff}
              label={diff}
              onClick={(e) => {
                quiz.current.difficulty = e.target.value;
              }}
            />
          ))}
        </CCol>
      </fieldset>
      <CButton type="submit">Submit</CButton>
    </CForm>
  );
};

export default CreateQuiz;
