import React, {useState, useEffect} from "react"
import { Form, Col } from "react-bootstrap"
import {useLocation, useParams, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getOrderIdBackend, getPaymentBackend, getOtpBackend, verifyOtp, verifyOtpBackend, sendMailBackend} from '../../redux/actions/entityActions'
import {Modal, Button} from 'react-bootstrap'
import ReactGA from 'react-ga'
import styles from './Entity.module.css'


function PropertyCheckout() {
    const location = useLocation()
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const query = new URLSearchParams(location.search) 
    const final_res = useSelector(state => state.entity.validation)
    const otp = useSelector(state => state.entity.otp) 

    const [display,setDisplay] = useState(false)
    const [show, setShow] = useState(false);
    const [pay, setPay] = useState(false)
    useEffect(()=>{
        if(final_res?.['status']){
            if(final_res['status'] === 'success'){
                console.log(final_res)
                dispatch(sendMailBackend(final_res))
                setDisplay(true)
                // history.push('/')
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

    const handleSuccessClose = () => {
        setDisplay(false)
        history.push('/')
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
            <div className={`${styles.description} container mt-3`}>
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
                                <Button className={`${styles.checkbutton} px-5`} onClick={handleShow}>
                                Confirm Booking
                                </Button>

                                {otp === "" || otp?.['error'] === false? 
                                <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>OTP Verification</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className={`${styles.successmodal} m-auto`}>
                                        Please enter the opt sent to your mobile!
                                        <input type="text"
                                        placeholder = "OTP from mobile"
                                        value={user_otp}
                                        onChange={(e)=>handleOtpChange(e)}/>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="m-auto">
                                    <Button variant="success" className="mx-2" onClick={handleClose}>
                                        Verify OTP
                                    </Button>
                                    <Button variant="danger" className="mx-2" onClick={handleClose}>
                                        Close
                                    </Button>
                                    </div>
                                </Modal.Footer>
                            </Modal>:
                            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>OTP Verification</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className={`${styles.successmodal} m-auto`}>
                                    Please enter the opt sent to your mobile!
                                    <input type="text"
                                    placeholder = "OTP from mobile"
                                    value={user_otp}
                                    onChange={(e)=>handleOtpChange(e)}/>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div>
                                <Button variant="success" className = "mx-2" onClick={handleClose}>
                                    Verify OTP
                                </Button>
                                <Button variant="danger" className = "mx-2" onClick={handleClose}>
                                    Close
                                </Button>
                                </div>
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
                                    <h6><b>{query.get('hotel')}</b></h6>
                                    <p>{query.get('room_type')} room in {query.get('hotel')}</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://q-xx.bstatic.com/xdata/images/hotel/max500/16186396.jpg?k=ee4495ac70ef5c8665f457cbd509bd0a606be9f8ce41eef4eb2befd278ab0379&amp;o=" alt="" />
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex flex-row my-4">
                                <div className="col-12">
                                    <div className="mb-2">
                                        <span><img src="https://img.icons8.com/ios/30/000000/guest-male.png" alt="" /> 2 guest</span>
                                    </div>
                                    <div>
                                        <span><img src="https://img.icons8.com/ios/30/000000/planner.png" alt="" />  {query.get('start_date')} &#8594; {query.get('end_date')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-cotent-center align-items-center">
                                <table className="table table-borderless ">
                                    <tbody>
                                        <tr>
                                            <td >₹{query.get('price')} x {query.get('days')} night</td>
                                            <td className="text-right">₹{Number(query.get('days') * Number(query.get('price')))}</td>
                                        </tr>
                                        <tr className="border-top">
                                            <th scope="row">Total(INR)</th>
                                            <td className="text-right"><b>₹{Number(query.get('days') * Number(query.get('price')))}</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        {final_res ? 
                            <div className={styles.successmodal} style={{"height":"400px"}}>
                                <Modal show={display} onHide={handleSuccessClose}>
                                    <Modal.Header className="d-flex flex-column border-light align-items-center">
                                    <div clasName="m-auto"><h2 className="text-success">Payment Confirmation!</h2></div>
                                    <div className="m-auto">
                                        <img src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png" width="120px" height="150px"></img>
                                    </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <table className="table table-sm table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td><strong>Name</strong></td>
                                                    <td>{final_res['bookingInfo']['firstname']} {final_res['bookingInfo']['lastname']}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Email</strong></td>
                                                    <td>{final_res['bookingInfo']['email']}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Phone</strong></td>
                                                    <td>{final_res['bookingInfo']['mobile']}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Order Id</strong></td>
                                                    <td>{final_res['bookingInfo']['razorpay_order_id']}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Payment Id</strong></td>
                                                    <td>{final_res['bookingInfo']['razorpay_payment_id']}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Modal.Body>
                                    <Modal.Footer className="border-light">
                                    <Button className="btn btn-success m-auto px-5 py-2" onClick={handleSuccessClose}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>:
                        null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PropertyCheckout
