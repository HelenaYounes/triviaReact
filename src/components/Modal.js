import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CButton} from "@coreui/react";

const Modal = ({isVisible}) => {
    return(
        <CModal
        className="show d-block position-static"
        backdrop={false}
        keyboard={false}
        portal={false}
        visible = {isVisible}
      >
        <CModalHeader>
          <CModalTitle>React Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>React Modal body text goes here.</CModalBody>
        <CModalFooter>
          <CButton color="secondary">Close</CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    );
}

export default Modal;