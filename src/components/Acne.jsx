

import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
// import {useParams} from "react-router-dom"
import "./Acss.css"


export const Acne = () => {
    // const {userid} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://practo-suraj-server.herokuapp.com/acne")
            .then(d => d.json())
            .then((res) => {
                // console.log('res:', res)
                setData(res)

            })
    }, [])





    return <div>

        <h2>Acne</h2>

        <div className="medicine">

            {data.map((e, i) =>

                <div className="mainMedicine">
                    <Link className="know_more" to={`/acne/${e.id}`}>
                        <img className="M_img" src={e.image} alt="text" />
                    </Link>
                    <hr></hr>
                    <p className="m_Name">{e.title}</p>
                    <p className="m_price">₹{e.price}&nbsp;&nbsp;<span className="m_price1">₹{e.price1}</span>&nbsp;&nbsp;<span className="m_discount">{e.discount}</span></p>
                    <div className="m_unitbtn">
                        <p>{e.unitcount}</p>
                        <button className="addtocart">ADD</button>
                    </div>
                </div>

            )}
        </div>
    </div>


}