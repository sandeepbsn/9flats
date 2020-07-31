import React from "react"
import { Modal, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";

function OrderModals() {
    let history = useHistory();
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const onExit = () => {
        history.push('/')
    };


    return (
        <>
            <Button variant="primary" style={{ marginTop: "100px" }} onClick={showModal} >
                Launch demo modal
        </Button>
            <Modal show={isOpen} onHide={hideModal} onExit={onExit} style={{ width: "400px" }} className="modal-dialog modal-dialog-centered">
                <div className="text-right bg-success " style={{ height: 10 }}></div>
                <button className="close btn ml-auto p-1 border rounded-circle shadow" aria-label="Close">
                    <span aria-hidden="true" className="px-2 rounded-circle " onClick={hideModal} style={{backgroundColor:"grey",color:"black"}}>&times;</span>
                </button>
                <Modal.Header className="justify-content-center">
                    <div className="text-center p-3">
                        <img className="shadow rounded-circle" src="https://img.icons8.com/fluent/48/000000/ok.png" /><br />
                        <h2 style={{ color: "green", marginTop: "10px" }}><b>Payment<br />Successful!</b></h2>
                    </div>
                </Modal.Header>
                <Modal.Body className=" d-flex justify-content-center align-items-center">
                    <table className="table table-borderless text-muted py-0 my-0" style={{ width: "350px" }}>
                        <tbody >
                            <tr >
                                <td className="py-0 my-0">Name:</td>
                                <td className="py-0 my-0 text-right">Avinash Das</td>
                            </tr>
                            <tr >
                                <td className="py-0 my-0">Email:</td>
                                <td className="py-0 my-0 text-right">avinash@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="py-0 my-0">Mobile:</td>
                                <td className="py-0 my-0 text-right">9996663332</td>
                            </tr>
                            <tr colspan="2" rowspan="2">
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="py-0 my-0">Order ID:</td>
                                <td className="py-0 my-0 text-right">AAAXXXCCCC111222333</td>

                            </tr>
                            <tr>
                                <td className="py-0 my-0">Payment ID:</td>
                                <td className="py-0 my-0 text-right">11225554336654559</td>
                            </tr>
                            <tr colspan="2">
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Amount Paid:</th>
                                <td className="text-right"><b>₹1,513.41</b></td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                {/* <Modal.Footer className="d-flex justify-content-center align-items-center">
                    <Button  className="btn btn-success shadow-lg" >Close</Button>
                </Modal.Footer> */}
                <div className="text-right bg-success" style={{ height: 10 }}></div>
            </Modal>
        </>
    );
};
export default OrderModals


