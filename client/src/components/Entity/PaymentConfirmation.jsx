import React from "react"
import { Modal, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";

function OrderModals({bookingInfo, display}) {
    console.log(bookingInfo, display)
    let history = useHistory();

    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
          <Modal show={dispaly} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
};
export default OrderModals