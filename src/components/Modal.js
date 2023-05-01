import CreateQuiz from "./CreateQuiz";
import {
  CButton,
  CModal,
  CModalFooter,
  CModalTitle,
  CModalHeader,
  CModalBody,
} from "@coreui/react";

const Modal = ({
  visible,
  onClose,
  onClick,
  categoriesList,
  onPickCategory,
}) => {
  return (
    <CModal visible={visible} onClose={onClose}>
      <CModalHeader onClose={onClose}>
        <CModalTitle>Create New Quiz</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CreateQuiz
          categoriesList={categoriesList}
          onPickCategory={onPickCategory}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  );
};
export default Modal;
