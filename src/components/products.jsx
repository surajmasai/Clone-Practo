import { useParams } from "react-router-dom";

export const Products = () => {
    const { id } = useParams();

    return (
        <div>product details of id : {id}</div>
    )
}