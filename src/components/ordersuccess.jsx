import React from "react"
import { Container } from "react-bootstrap"
import "./ordersuccess.css"
import { Link } from 'react-router-dom'

export const Ordersuccess = () => {
    return (
        <div>
            {/* <div className="navbar">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQmmxByln2DTy7LdTtAmgz9bjTND-dUpwKk_hbH_tP2Jn73h1K" alt="img" />
            </div> */}
            <div className="grey_color">



                <img src="https://icons.veryicon.com/png/o/miscellaneous/monochromatic-surface-icon-library/success-56.png" alt="" />
                <h4>Order successfully Placed</h4>
                <br />
                <Link to="/">
                    <button className="save_btn">Home</button>
                </Link>
                <br />
                <br />
            </div>
            <br />
            <Container className="last_order_p">
                <h6>Order Medicines & Health Products Online : India's most reliable Online Medical Store</h6>
                <p>Find and buy medicines online with Practo Pharmacy. Browse through prescription medicines, OTC products, health & wellness products on an online pharmacy that provides hassle free service across 100+ cities in India With an extensive catalogue of medicines and healthcare products provided on an extensive and easy to navigate destination for online medicine shopping, Practo Pharmacy provides added advantages which include:</p>
                <li>Automated prescription refill: Set up scheduled refills for your online medicine orders and never worry about running out of your meds</li>
                <li>Doorstep delivery: No more trips to the pharmacy, with on-time delivery of your medicines right to your doorstep</li>
                <li>Medicine order history: No more scrolling through pages to find what you need. Just check your medicine order history and re-order</li>
                <li>Exclusive offers and discounts: Enjoy cashbacks, flat discounts and other exclusive offers on your medicine orders</li>

            </Container>

        </div>
    )

}