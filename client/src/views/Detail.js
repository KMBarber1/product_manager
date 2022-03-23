import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useHistory} from "react-router-dom";

// One Product
const Detail = (props) => {

    const [product, setProduct] = useState();
    const {id} = useParams();
    const history = useHistory()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    

    // delete and redirect to main page ?????
    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => history.push("/"))
            .catch(err => console.log(err))
    }


    return (

        <div>

            {

            product ? (

                <div>
                    <h1>Product Details</h1>
                    <h3>Title: {product.title}</h3>
                    <h3>Price: {product.price}</h3>
                    <h3>Discription: {product.discription}</h3>
                </div> 
            ) :
            
            <h1>Loading...</h1>

            }

            <button onClick={() => handleDelete(product._id)}> Delete </button>
            {/* <button type ="button" onClick = {(e)=>{history.push("/")}} >Delete</button> */}

        </div>

    )
}
    
export default Detail;

