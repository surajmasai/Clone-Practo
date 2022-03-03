import React from "react";
import { Container } from "react-bootstrap";
import Modal from "react-modal";
import { useState } from "react";
import "./address.css"
import { Link, useSearchParams } from "react-router-dom";


export const Address = () => {

    const [searchParams] = useSearchParams();

    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [name, setName] = useState(null);
    const [number, setNumber] = useState(null);
    const [houseNo, setHouseNo] = useState(null);
    const [street, setStreet] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [print, setPrint] = useState(false);

    function getName(e) {
        setName(e.target.value)
    }

    function getNumber(e) {
        setNumber(e.target.value)
    }

    function getHouseNo(e) {
        setHouseNo(e.target.value)
    }

    function getStreet(e) {
        setStreet(e.target.value)
    }

    function getMobile(e) {
        setMobile(e.target.value)
    }

    return (
        <div>
            <div className="navbar">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQmmxByln2DTy7LdTtAmgz9bjTND-dUpwKk_hbH_tP2Jn73h1K" alt="img" />
            </div>
            <div className="grey">
                <Container className="box">
                    <h6> <span className="icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAjQkHC_LM6nBKD5XB8rCEwHkmXVBOoORzw&usqp=CAU" alt="" /></span> Back to My Cart</h6>
                    <div className="innerbox">
                        <div className="login_bar">
                            <h5><span className="tick"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAApVBMVEUAgED////l5eXk5OTm5ub4+Pjz8/Pt7e37+/vu7u7p6eny8vL29vYAfjwAcyMAezYAeTEAdisAeC4AciH28vU/j1wAejfu8++sx7Tj6+W81cW20cB1qofv6+6ZuqL8+vzb5N+EsJJnn3gmiU8ZhEdKk2TI286Pt5uzybo1ilRXmW6MsZSCs5RjnHRSlGjE2szU2tSlwKzC0scAbRDV49mqy7amvqza+csQAAAS5klEQVR4nO2daYOiutKAWWUXULrVaRB7tbtner3e9///tDcJAQMkIUEWP9x8OHVmxpJ6zFJZioqigqIbhguErRuaBaSpGZoH5AJIH0gHSBNIyzB0+HEDS47aoqFmD6JmFGoGTc0r1bQONeV/xHRivfwyOWKdbwOfWE6tm7hQ0xGxhk3Xqp/PQF8GPoxsMKpfXcNfpo2n5jXU3IHVFF3X0b8AWVSYrjtA+kCiLwISfRGQyGwg8cd1hppHUXPZalZDzR9ZTTGKWi+bKGwsyHRGY3HrjYWm5mE1v1DTSDU3yzIokyTJoQR/9IgmylLTcIXpVYWhJtp8miOiRhBryHS9RVzrjK7WJG6pYRt0n1Cz3CxRN7u7n/v04fMxWsKyjqPH54eH4/Zut0sS8O9ttfJpZ9M1cuTw9RZxt5rigqLatg2EpdqqCaQD5ALIBZAekD6QDpAmkBaQ4NMqQ80H0muogcrc/NmnT1EcR1EYBkGglAX8fxhG4B9un9Kfr42aZ9alT+tUU3A7N4juYeLuscDdw8Gdsuwe2rl7sNQWWA2I0/4jWK4AqcIrgHy1DD62JzV3jdrTjPrTVOJpTuNp5cjBUCsa44j+2Muc7/3zKo74rDXuKF4977+dXB3dH9e6h6lXX6aT/rjsHkbVl7lqv6kSd9QsvbZjJX05d0riaUbjaUUdGzptwGGqKTZs55ZlAWEC4QDpA+kBuQByAaQHpA+kY1muCST4o0uquS21JH9J41UP3Ao6Tn89zxJ7mpyRiqZhf6zhdq5hx6phf6zh7qHVXV1dzSbUfHV3jFZhT9qyhKvwuEkMre5Yz0+z8NM8bKRfM5KjNrg/dp27m/hSXAwd32wdF42VQ/pjTdMK0zXsWDWtVscarmMN/3wa/vmAHkUtP+yVVd/G3C5BpOzN9tNAZWnUOm4YqZ2NPaspDigmKJZjQekD6QG5AHIBpEdIH0jwaav4OEUt39z377wM5jC+36jnp7aM9GhGWpWRpLGFmoLbuUF0DxP/dAv80zm4L5fd4/zT1dRyPV0P05zrJVyn5vlpKmGkg41cEEaWfdnQa0aex6nh/PHmfjkGb8EM6nlYf1zvHsw6xnVrnLsHrmPQh/cDDVcM5uXecaun0eq4ciq4LzeMVCs1xQfFAwWIBUUu8D8vzh+jSP/1KRqRF5bo6dX3GMaKGYk/DsdqKX/cGquB2uY5Hna8opUgft5lkv64NVYP44+943J8XsS8PDrD+OOGY5Wr4+z0OHaDPpfo8TsRqWONV8eo/YNCyAVHNj+e/11PU8FFCdZHW97IGpvS+g1kxmr38DxdBRclejtk3LFa7xqr245V3B9nPxOMWM0SxD/JEP5YZs5V/nxZGk/OC0uc9qpjzKZI+OK6u1t4N2POOXglegNPJ4zsMLbOJjxWN9dO2a/Ebs7QJVj9JrSxWmjt1NMfZ9sZujBRlncD+GPBPZDiZ9sv5+SFyHuZORe5B2IWi160fgQCLTsJiZadQPqEBP+dacwiS5wmTSMXNSOLBXyDzXeE1k5awx9771N7YVqJ3nNyrNZE1049/HHyPtcgXS/R+wX+WGoP5PM6gMGq+ZO+B4IaInMPxIL7uXAvCO7nmngb2MTbwCbeBi4k+JRtWfnztQAD5Ofcw8ZVxgIjncpYkg1Jz+bsZWrUvUzvamoYlvAzx0aO5o+dqwIGyO/S/lgyRiC9hlGaLFEqGyNgV+erNjpfhWcz8FgWHunAM2R4pAOPZeFRjpvs5/fDzRLvk9JIdO5UGFueIdv4DBmyFedPHWeLtVgfN9vOPdOileW26MuiZ4sy/vj3GoEVZX2S98diMQLWam42Rol9mRgBA9evgX8DINHIdQ6TMvxivpW8zbpa4pTgLUFGOsBYPDk0cD0jWsxYsAnE+uDGkqTX5ZfIEj5k4rE+ov44+7m+Yfpc4p98cH98mBU46JoGLHfC/hjPwrpWEurNnJ04vLnrcBPBoyW6syfmnbL7Oeda4ZuqdiFH95lYpK8YsTurJ4bA3cjLF0OGWOMTe08ztukCuBM5eHLEiIVGruOMjqkE7kSOjslQ0cb5bj0RHaWcgTuR1wdjmGhjLZ9xskUCq+ofLnJw4wlHG8NZJlwxwpkYjMiFwfhuMcsEf72dbz4d3qiqOPJqaxWjl+uiWSZAM1psIiuJ29mquF7DncjB7TDRxsfZXHGzhjuRo+MQ0cab2YYtGnAH8nojGm2Md0QsvOtj4V0fy12osy2Z6MB85DBNXBxt7JbRxg22Tn98mKuKWcB85PVGvdAf5x8zDVtsYC5yCOMHLoo2nquKecBc5PWua4feKk4s0EkFisi1cCCvBQN45+rFfGAeMqhk0zkztdk6Ttpm2gfoAuYhx4dLoo2zv7NUcTewqn6xkMO/2QXRxu7VAvOQ3e5oYxgxQMhFKZOfOaZbYsBs5Ognh5FNMDqCxsaPfJlj0SQKDPoyfZAJ3hJu5AvHH/tzjFviwKCW6Z0ufukbbZzfT9+NZYBV9ZHaBsM0Y/ljRrRxKc3pZx/hswSvydp9W/qcqGPefvWfyXcChgFWVl8996sfpm7UAwEr4UPPaOOpG/VQwGBy3RVtTG3zi7uJnfFwwMrqbsHux8yxOnuY1hkPCKwEDygjhWR0kzNtFcsBKx21ETmIWCraWPuddPohBxx0Nb/4F9ctZc5VzjnNs0Tz6nzSk5dhaxh839Ev5tVFtDHJxl47TTmnHhpYCW4y6Whje8Lz08GBQbN2ZaONFy/TdeNICljshCR6NXjRxpR9LnM/WTeWA+4ctIoSHlXWPhdjLzP/nKobjwKsBJ+qpD+2p6ri6FMCeCMKrCi3qmR0026ibhyOBKwsN13RxnYt2th6nWbGJTVK+xLAYOiyXCob42zRnWb+IQW8kTrHDo+uVLSx1DIi7PvryNWw3ME9WExIRRsnEhCr9Niv00sNWpLAADlhxAi040BQtLF4N16lqvq3DzJ6QUu0yAxa+OtZcSD0WB/xoRoC90IOxwVW4p1UtLHwTjV637sPspRbkm7S0LKDlD/eCrbqElgaWa5J90kIFd3xoo2b3skVnFWfgQGyzGJrfGAl3LuYTcQ7Zf+EiFcpaZhELcsB94snC/9hYqFo40xoq7oOLIE8BTB8d4JD3MyAkonEuzSBhZEnAVaCjwyzNfZA6COXwDsCbWBBZDm31DtEMriRim7qjiCPKcBCyHI13D8FR/AoFW3cecZGBxbIITHBKI3Lkj0DobzT1mU3C7gTeZo+jInp77Sh36C5kkg6iGl9uCxHbnDsdMDKOiHYOqKN9YR/rMiuYVg4fXlK4JJYLNqYT8wH5tTyVINWnZgabdzcGcl5xF3AzL48LTAgbrBZvGhjDnE3MAM5+pABvjyb7FrKH7OJRYCpyHLAA7ybsZaKNmbOQMSAKchT1zCYgnCijYm8KEXOF0aglDhwC1kOeIhkZ2DORWWjn7RljDOY8F7c7Bqy3KA1SLKz4DMj2LqijVmbt+GLhOEE8vQ1XMWCCEYbZ+kt/Wvirz7I0cP0wEqYupitsVqk5mBLmEcSyx7IcsBDJTkPjx6VjRH5wt7Zk0dezVHD4HfeSkUbf7GXi7LIK6k+PFza/tWXVLQxb4d+LYX8H6kaHjAlJdyhp/pjlCd0gfOFltLf8PYypGr5TgZ4yKSj8cansjEiURPGWN0DeSZg5TaRijZO+Ft7oyAPCxzcJEJv/5R17Ha8MDAC8rDAcIOeEcFGz1Hudx08DY485KAFS7Q15aKNOwPYln+uGliJT2QkqsBdA9zBenjk3YDX52DijWS0scAe/YDIu8FzYQdPKjfauHmvhueJvOs0GPLwwPD1es+hsrGijX2RtyQGQt6NkPw7+nFlo413IgfggyCPAawsv+VzGwvFmgyAPApwoFgaJ9rYob1Vn4jFsF2MPAqwEjzkzLfqWZkTDMHglwuRxwGGi2NV+u2fg2Aky0XIIwErywMiZvhjxn2LmeirIRcg70a6Jyl4sxAT9b5F2r2TLtqzFn5voDfyWMBKuFdZd2rychuLZ15byiz7CeDRLuFY7/rlNmYdTAyEPB5w8Ngzt7HE6zA9GvZ4wLBRczKSFTm8Vdod1zKJE6SRRwRW4m/XBUhqyWbU7rjmZBbMZTK/Sjbs0QYtBaXH0PrlNvbvZBIJSCGPCQxXEb1zG0ulTpBAHhVYiSy9K7exVv0G5ZWkBsrrk8nlqhJGHrMP46RkMCuZhtmMGhs3d5Mh+bqmIPK4wEqMjnx75jZOJN9eFEIWWnn3L8GnSLYqVoZQ41Xy9QcB5JGBldUras1sf9yRS1F83lWUTuSxgeF866JcilIOCpYOZNE1aO+yurswt3HOPXKjFS7yYewb/ALYTYVuVyA9E3mDhi+f2JiDPHaTBlUMZ7ulZyprk/C+IrmN5ROyM5HHBw6ekstzGzNyu/EKA3l8YCX+41yY2xhmc+6RGGT5X1ofHj8XVPAmcNtR80YrsKpCN1rhFSPoy6ceVUNBHn2Uho89oZus4I1WbnGjFV4xEowCdw2Ive7VfHYTeQrg8CEb5K4Bo1f/ayBPkjE4PojdNaBR/bFeEevqvk8ahRryFDWsRPtMq981UO7Q1/yxhXc3Lby7iSJybXzDpF1c2ig910SFQJ4EOHhM4KkLvJ0OS4KtlKxo4+ZNsd+92mSFPAmwsj7B+u2+RZRs58x7YbJ+uUIxcp/BXr5E95nUze2NE3OtcRuw06tdF8jT1HDw5AneBoxOG3FEroUjcs/SKi9R7llPAHkaYDBOOxa+ltrCNz5bFDbfEr3VO9n3S5Aa30+TWHX1o4re6i16M11H3CKzTJMDKkAJgmVvbqfeNVDd3K4ZQwW3j1CC0BC/DdhrRzaVcoH/upDJNENur7I+NYytMdXZRO/ig/V8tTcuxtv6rd5D3MWH+nIyebJjsYLePJG9ub0ZbUy/uT27oivMz6XIeXUecLr8cZHH2FuIyIU/5518jBI8+TyjW3/Ny0NfG6uL7iGV+G2SEtz6yEif9Mda0x8LRBuzbm6/ugF7eZK9uV1wzlX+fNmV3XNd3G8tVccMX0z3yUDmpxkvX2yV9SmnGcnyxbxoY+pYXfxkL9dTy+sXZGR9ctg1Vkv4Ywt3j6tp2LAPLxgDTpc/5u+BlHWMlyTX0pchcFXHrTmX3ppz4T2Qxtuq57dWHadcG5fSL19uzU9jH5gJlCA+5dhYqpFtWbB13dPW7B64L29mn4oEygYZ6ZFjtdDaSdIfl67OeJt3whm+2YWRnirvjxnRxnR/XG0vWB/z3R+rKKsPHxtZq+OmkTptD8Q08X6uifesTbxnbeI9a7PYsway2AY28Tawup/PMa+PqpCRZikJNu5eplbtZZL+uHJ1v4O/iCZWAhi/VA44lT/WuP7Yvsgfl67OPbzNco/b465hZA9/zL//2EF3mZ+P7LQqGN9Np98WWaZuaaSDjVwQRnbff9w6X0VnxzY6O4bnTkD6oNM6+FjWqh/Lqq+9k1f3K2F0UsuDbhsddHcbWT8fF7jHXK95J63WWMCXfkxZzfGHRXQ/X6+8Ex5wRO4x7+mP9Uotma6aw/A1OzvWvv64O0ag6h52vXuUMlPTSSadQZwaLnHYXxjpYSN9wkh+jAAefMkMkjCWq4i9LWK6HCDxWG3gn1CrqSW/b6MzB6u334Qw0mwY6bWNNChspiHonaq+THqns5o7etOObreZWw/aaXknne+dBvDHdbXjcjzmcHksK+3sWOfwx3U1/34kZsBr1xyrpD8mxylQx31XEvUNQRup2Wk8PHMYp3ZmUJYEAiuJi05Tmd6pnmLiPhw2c0sUHs22m9H7eaemP2bNQDqI62qZu30crKLD+HHrMk2nEusyxF113Pz5GGpufkrjASo6iOL0JXE1mumEkfIzEMoQ1HPkqtSMzP25WV4EHUTLmx83awxBPUcu2WhjUe9UU8vVzfZm3RM6iNbP203idriZi7wTN9q4moG4rRkIUw29cHDYPoSxZCxFADQefjZU0zWpGYjGm4EYxW04xU0xcJYJV4xqGW2sgsVYMYEDEnWT4oKZUq28aKatZmX2af8eLCMh7CCMlsH7/sVJXIGnmf2MBLPMy1cSTTWPVDPczN5t72+COIpCBngQhlEUBzf3dwcrc8mncZcEfVcSw/rj5uhZqiXO4fX1X/p0u4rjeBXBAiijFfhjFD6l//7v9WAS/YjiGdqDbt+xWiDamL4joGkMNXKNTqihp2S7w/fp6277A8p2e/f1+32AH89dl6VWbrW3l/YCOwIaZcCpoo1dC+UnhxJFGwNZ7PpYcEPFdoDEAbyNFAyu1VDzOtSgDVaWIdIytrlbrflUnNSipuaJqI3hjxseslQz5NQ4jvUa/fGioWYPojagP+6MNqbu0Lc2v89qC0LN6q/G3Wrvu0NPydtU5W+CBxzwkBIecMBDyXMqJNrlsl1qTl3NHEfNY6s5UtHGQuvj+oqVoTbYQren2v8DPtDqxl4zEeoAAAAASUVORK5CYII=" alt="" /></span>Login</h5>
                        </div>
                        <div className="prescription_bar">
                            <h5><span className="tick"><img src="data:image/png;base64,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" alt="" /></span>Prescription</h5>
                        </div>
                        <div className="delivery_bar">
                            <h5><span className="gps"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYVdQ4vcG3fuhjr-Ree8ha-iVZaxeCAIdlg&usqp=CAU" alt="" /></span>Delivery Details</h5>
                        </div>
                        <div className="down_bigbox">
                            <div className="modal_div">
                                <Container >
                                    <h5><span className="home_logo"><img src="data:image/jpeg;base64,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" alt="" /></span>Deliver to Home</h5>
                                    {
                                        <p className="address_shown">{name} {number} {houseNo} {street} {mobile}</p>
                                    }

                                    <Modal className="modal_address" isOpen={modalIsOpen}>

                                        <div className="address_bar">Add address details</div>
                                        <form>


                                            <h5>Delivery address</h5>
                                            <br />
                                            <label>Delivery Location*</label>
                                            <input type="text" onChange={getName} required placeholder="Delivery Location*" />
                                            <br />
                                            <br />
                                            <label>Delivery Pincode*</label>
                                            <input type="number" onChange={getNumber} placeholder="Delivery Pincode*" />
                                            <br />
                                            <br />
                                            <label>House number / Building Name*</label>
                                            <input type="text" onChange={getHouseNo} placeholder="House number / Building Name*" />
                                            <br />
                                            <br />
                                            <label>Street / Locality Name*</label>
                                            <input type="text" onChange={getStreet} placeholder="Street / Locality Name*" />
                                            <br />
                                            <br />
                                            <label>Recipient’s Mobile*</label>
                                            <input type="number" onChange={getMobile} placeholder="Recipient’s Mobile*" />
                                            <br />
                                            <br />


                                            <button className="save_btn" onClick={() => setPrint(true)} onClick={() => setmodalIsOpen(false)}  >save</button>

                                        </form>
                                        <br />

                                    </Modal>
                                    <button className="change" onClick={() => setmodalIsOpen(true)}>Change Address</button>
                                </Container>
                            </div>
                            <div className="modal_div">

                                <div className="std_box">
                                    <div className="std_div1">
                                        <h5>Standard Delivery</h5>
                                    </div>
                                    <div className="std_div2">
                                        <div>You save more, save Rs 5.00</div>
                                        <p>Delivered by Practo Powered Pharmacy</p>

                                    </div>
                                    <div className="std_div3">
                                        <div>All items are available</div>
                                        <p>Delivery by <strong>Feb 01</strong></p>
                                    </div>
                                    <div className="std_div4">
                                        <h4>₹{searchParams.get('amount')}</h4>
                                        <p>₹95 <span>₹100</span> + Delivery fee ₹39</p>

                                        <button><Link to="/payment">Confirm</Link></button>

                                        <br />
                                    </div>


                                </div>
                                <br />
                            </div>
                            <div className="last_payment_div">
                                <h5><span className="rupee"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjx_DgrTzjbIlWIOwwkgH5iMoBmoQCKE1zg&usqp=CAU" alt="" /></span>Payment Details</h5>
                            </div>


                        </div>

                    </div>
                </Container>
            </div>
        </div>
    )
}