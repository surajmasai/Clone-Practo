import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Pdetails.css"
import { Link } from "react-router-dom";

export const ProductsDetails = () => {

    const { userid, type } = useParams()
    //   console.log('userid:', userid)
    const [details, setDetails] = useState([])


    useEffect(() => {
        fetch(`https://practo-suraj-server.herokuapp.com/${type}/${userid}`)
            .then(d => d.json())
            .then((res) => {
                // console.log('res:', res)
                setDetails(res)

            })
    }, [userid])

    // console.log('details:', details)

    function addtocart() {

        fetch("http://localhost:5001/cart", {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
                "Content-type": "application/json"
            }
        }).then(() => {
            console.log(details)
        }).catch(err => {
            console.log(err)
        })

    }


    // console.log('userid:', userid)

    return <div>
        <Link to="/cart" target="_blank">Cart</Link>
        <div className="maindetails">
            <div className="left">
                <img className="imgSize" src={details.image} alt="test" />
                <p className="m_price">₹{details.price}&nbsp;&nbsp;<span className="m_price1">₹{details.price1}</span>&nbsp;&nbsp;<span className="m_discount">{details.discount}</span></p>
                <div className="unitcount">
                    <div>
                        <p>PACK SIZE</p>
                        <p>{details.unitcount}</p>

                    </div>
                    <div>
                        <p>UNIT COUNT</p>
                        <p>{details.packsize}</p>
                    </div>
                </div>
                <button onClick={addtocart} className="addtocartbtn">ADD TO CART</button>
            </div>
            <div className="right">

                <h2>{details.title}</h2>
                <p>Manufactured By {details.manufactured}</p>
                <hr />
                <div className="highlights">
                    <h4>Highlights</h4>
                    <ul>
                        <p><li>{details.Highlights}</li></p>
                        <p><li>{details.Highlights1}</li></p>
                        <p><li>{details.Highlights2}</li></p>
                        <p><li>{details.Highlights3}</li></p>
                    </ul>
                </div>
                <hr />
                <div className="Description">
                    <h4>Description</h4>
                    <p>{details.dec}</p>
                </div>
                <hr />
                <div className="direactionforuse">
                    <h4>Direactions for use</h4>
                    <p>{details.direaction}</p>
                </div>
                <hr />
                <div className="storage">
                    <h4>Storage</h4>
                    <p>{details.storage}</p>
                </div>
                <hr />
                <div className="warning">
                    <h4>Warning</h4>
                    <p>{details.warning}</p>
                </div>
                <hr />
                <div className="precaution">
                    <h4>Precaution</h4>
                    <p>{details.precaution}</p>
                </div>
            </div>
        </div>
    </div>
}