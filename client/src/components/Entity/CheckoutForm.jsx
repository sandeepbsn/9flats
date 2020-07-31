import React, {useState, useEffect} from "react"
import { Form, Col } from "react-bootstrap"
import {useLocation, useParams, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getOrderIdBackend, getPaymentBackend, getOtpBackend, verifyOtp, verifyOtpBackend, sendMailBackend} from '../../redux/actions/entityActions'
import axios from 'axios'
import {Modal, Button} from 'react-bootstrap'
import ReactGA from 'react-ga'


function PropertyCheckout() {
    const location = useLocation()
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const query = new URLSearchParams(location.search) 
    const final_res = useSelector(state => state.entity.validation)
    const otp = useSelector(state => state.entity.otp) 


    const [show, setShow] = useState(false);
    const [pay, setPay] = useState(false)
    useEffect(()=>{
        if(final_res?.['status']){
            if(final_res['status'] === 'success'){
                console.log(final_res)
                dispatch(sendMailBackend(final_res))
                alert(final_res['message'])
                history.push('/')
            }
            else{
                alert(final_res['message'])
            }
        }
        if(otp){
            if(otp['error'] === false){
                if(pay === false){
                    razorpay()
                    setPay(true)
                }
            }
            else{
                setShow(true)
            }
        }
    },[final_res,otp])

    const [user_otp, setUserOtp] = useState("")

    const handleOtpChange = (e) => {
        setUserOtp(e.target.value)
    }

    const [bookingInfo, setBookingInfo] = useState({
        "firstname":"",
        "lastname":"",
        "email":"",
        "mobile":"",
        "property_id":params['property_id'],
        "start_date":query.get('start_date'),
        "end_date":query.get('end_date'),
        "days":query.get('days'),
        "price":query.get('price'),
        "room_type":query.get('room_type'),
    })
    // const [show, setShow] = useState(false);

    // const handleSimpleClose = () => setShow(false)
    
    const handleClose = async() => {
        await dispatch(verifyOtpBackend({"phone":bookingInfo['mobile'], "user_input":user_otp}))   
        setShow(false) 
    }
    const handleShow = (e) => {
        e.preventDefault()
        ReactGA.event({
            category:'Button',
            action:'user clicked the confirm booking button'
        })
        dispatch(getOtpBackend({"phone":bookingInfo['mobile']}))
        setShow(true)
    }
    const handleChange = (e) => {
        setBookingInfo({
            ...bookingInfo,
            [e.target.name]:e.target.value
        })
    }
    const razorpay = async() => {
        
        try {
            let order_res = await dispatch(getOrderIdBackend(bookingInfo))
            console.log(order_res)
        var options = {
            "key": "rzp_test_lskMJcJY6Yjp9c", // Enter the Key ID generated from the Dashboard
            "amount": order_res['amount'], // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "9flats",
            "description": "Test Transaction",
            "image": "https://assets.9flats.com/assets/new_home/logo-0aee51de5d08cfd71ad01d410e9b61ad821b8768f3c9de039f6bb6e48b792be7.svg",
            "order_id": order_res['id'], //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "prefill": {
                "name": "Username",
                "email": "User email address",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#F37254"
            },
            handler: async (response) => {
                console.log(response)
                let payload = {
                    ...response,
                    ...bookingInfo
                }
                await dispatch(getPaymentBackend(payload))                
            },
        };
        const rzp_trial = window.Razorpay(options);
        rzp_trial.open();
        } catch (error) {
            console.log(error)
        }
    }
    console.log(otp)
    return (
        <div>
            <div className="container mt-5" >
                <div className="row mb-5" style={{ marginTop: 80 }} >
                    <div className=" order-md-1 order-2 col-12 col-md-6 p-3">
                        <h3 style={{ color: "rgb(22, 139, 160)" }}><b>Enter Your Details</b></h3>
                        <Form className="mt-4" onSubmit = {(e)=>razorpay(e)}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" name="firstname" onChange={(e)=>handleChange(e)} required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" name="lastname" onChange={(e)=>handleChange(e)} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="email" placeholder="Email " name="email" required onChange={(e)=>handleChange(e)} />
                                </Form.Group>
                                <Form.Group  as={Col} controlId="formGridContactNo">
                                    <Form.Label>Contact No.</Form.Label>
                                    <Form.Control type="number" placeholder="Contact No." name="mobile" onChange={(e)=>handleChange(e)} required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>



                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>
                            <div className="text-center">
                                {/* <button className="btn btn-success btn-block" type="submit">Confirm Booking</button> */}
                                <Button variant="primary" onClick={handleShow}>
                                Confirm Booking
                                </Button>

                                {otp === "" || otp?.['error'] === false? 
                                <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Please enter the opt sent to your mobile!
                                    <input type="text"
                                    placeholder = "OTP from mobile"
                                    value={user_otp}
                                    onChange={(e)=>handleOtpChange(e)}/>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>:
                            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Please enter the opt sent to your mobile!
                                <input type="text"
                                placeholder = "OTP from mobile"
                                value={user_otp}
                                onChange={(e)=>handleOtpChange(e)}/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            <small className="text-danger">OTP invalid. Please try again</small>
                            </Modal.Footer>
                        </Modal>}
                            </div>
                        </Form>
                    </div>
                    <div className=" order-md-2 order-1 col-12 col-md-6 d-flex justify-content-center align-items-center" >
                        <div className="border rounded shadow p-3" style={{ width: 350 }}>
                            <div className="d-flex flex-row justify-cotent-center align-items-center mt-3" >
                                <div className="col-8">
                                    <h6><b>The Trident</b></h6>
                                    <p>Private room in farm stay in Bangalore</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://q-xx.bstatic.com/xdata/images/hotel/max500/16186396.jpg?k=ee4495ac70ef5c8665f457cbd509bd0a606be9f8ce41eef4eb2befd278ab0379&amp;o=" alt="" />
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex flex-row my-4">
                                <div className="col-12">
                                    <div className="mb-2">
                                        <span><img src="https://img.icons8.com/ios/30/000000/guest-male.png" alt="" /> 1 guest</span>
                                    </div>
                                    <div>
                                        <span><img src="https://img.icons8.com/ios/30/000000/planner.png" alt="" />  Jul 31, 2020 &#8594; Aug 1, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-cotent-center align-items-center">
                                <table className="table table-borderless ">
                                    <tbody>
                                        <tr>
                                            <td >₹1,200.00 x 1 night</td>
                                            <td className="text-right">₹1,200.00</td>
                                        </tr>
                                        <tr>
                                            <td >Service fee</td>
                                            <td className="text-right">₹169.41</td>
                                        </tr>
                                        <tr>
                                            <td >Occupancy taxes and fees</td>
                                            <td className="text-right">₹144.00</td>
                                        </tr>

                                        <tr className="border-top">
                                            <th scope="row">Total(INR)</th>
                                            <td className="text-right"><b>₹1,513.41</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PropertyCheckout
