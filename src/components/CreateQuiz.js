import { useRef } from "react";

import {
  CForm,
  CRow,
  CCol,
  CFormLabel,
  CButton,
  CFormSelect,
  CFormCheck,
} from "@coreui/react";

const CreateQuiz = ({ categoriesList, onPickCategory }) => {
  const quiz = useRef({
    category: "",
    difficulty: "easy",
    limit: "5",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onPickCategory(quiz.current);
  };

  return (
    <CForm onSubmit={onSubmitHandler}>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Categories
        </CFormLabel>
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
        <CFormLabel
          htmlFor="inputPassword3"
          className="col-sm-2 col-form-label"
        >
          Number of Questions
        </CFormLabel>
        <CCol sm={10}>
          <CFormSelect
            aria-label="Default select example"
            onChange={(e) => {
              quiz.current.limit = e.target.value;
            }}
          >
            <option>Select Number of Questions</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </CFormSelect>
        </CCol>
      </CRow>
      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">Difficulty</legend>
        <CCol
          sm={10}
          onClick={(e) => {
            quiz.current.difficulty = e.target.value;
          }}
        >
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios1"
            value="easy"
            label="easy"
            defaultChecked
          />
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios2"
            value="medium"
            label="medium"
          />
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios3"
            value="hard"
            label="hard"
          />
        </CCol>
      </fieldset>
      <CButton type="submit">Submit</CButton>
    </CForm>
  );
};

export default CreateQuiz;
