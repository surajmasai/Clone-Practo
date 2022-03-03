import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./payment.css"

export const Payment = () => {
    return (
        <div>
            {/* <div className="navbar">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQmmxByln2DTy7LdTtAmgz9bjTND-dUpwKk_hbH_tP2Jn73h1K" alt="img" />
            </div> */}
            <div className="grey">

                <Container>
                    <div className="modal_div">
                        <div  >
                            <h3>Payment Options</h3>
                        </div>
                        <div><input type="checkbox" /> Debit / Credit Card</div>
                        <div><input type="checkbox" />Paytm Wallet</div>
                        <div><input type="checkbox" /> UPI</div>
                        <div><input type="checkbox" /> Google Pay</div>
                        <div><input type="checkbox" />Amazon Pay</div>
                        <div><input type="checkbox" /> PhonePe / BHIM UPI</div>
                        <div><input type="checkbox" /> Cash on Delivery</div>
                        <br />
                        <Link to="/ordersuccess">
                            <button className="save_btn">Proceed</button>
                        </Link>
                    </div>
                </Container>


            </div>

        </div>
    )

}