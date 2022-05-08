import { useState } from "react";
// import { Link } from "react-router-dom";

export const Counter = (props) => {
    const [count, setCount] = useState(1);

    const changeCount = (value) => {

        setCount(count + value);
    };
    props.handleCount(count);
    // console.log(count)

    if (count < 1) {

        // console.log(props.data.id)
        // const handleDelete = (props.id) => {
        fetch(`http://localhost:5001/cart/${props.data.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then(() => {

            // getData()
            // console.log("yes")

        }).catch(err => {
            console.log(err)
        })
        window.location.reload();
        // }
    }

    return <div>
        <button onClick={() => changeCount(1)}>+</button>
        <p>{count}</p>
        <button onClick={() => changeCount(-1)}>-</button>
    </div>



};