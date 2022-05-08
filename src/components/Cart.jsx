import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import { Counter } from "./Counter"

import "./cart.css"

export const Cart = () => {




    const [cart, setCart] = useState([])

    const [amt, setAmt] = useState("");

    const [cartitem, setCartitem] = useState("")

    useEffect(() => {
        fetch("https://practo-suraj-server.herokuapp.com/cart")
            .then(d => d.json())
            .then((res) => {
                // console.log('res:', res)
                setCart(res)

            })
    }, [cart])


    let pay = 0;
    cart.map((p) => {

        // console.log(p.price, "price")
        pay += p.price * amt
    })




    const handleCount = (value) => {

        setAmt(value);

    }

    // console.log(amt, "sdkjh")



    return (
        <div className="cartpage">
            <div>

                <div className="maincart">
                    <h2 className="cartheading">CART</h2>
                    <hr></hr>
                    {cart.map((e) =>
                        <div>
                            <div className="cartitem">
                                <div className="leftcart">
                                    <img src={e.image} alt="medicineimage" />
                                </div>
                                <div className="middlecart">
                                    <h4>{e.title}</h4>
                                    <p>{e.manufactured}</p>
                                    <p>{e.unitcount}</p>
                                </div>
                                <div className="rightcart">
                                    <h4>₹ {e.price}</h4>
                                    <p>₹ {e.price1}<span> ({e.discount}) </span></p>
                                    <div className="counter">
                                        <Counter data={e}
                                            handleCount={handleCount}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    )}

                    <div className="payableamount">
                        <h4>Payable Amount: ₹ {pay} </h4>
                    </div>
                    <div className="checkoutbtn">

                        <button><Link to={`/address?amount=${pay}`}>Checkout</Link></button>

                    </div>
                </div>

            </div>

        </div>
    )


}