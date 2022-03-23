import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';

// Edit Product
const Edit = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [discription, setDiscription] = useState("");
    const {id} = useParams()
    const history = useHistory()
    const [errors, setErrors] = useState([])


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const product = res.data
                setTitle(product.title)
                setPrice(product.price)
                setDiscription(product.discription)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {title, price, discription})
            .then(res=>{
                // console.log("success")
                history.push("/")
            })
            .catch(err=>{
                // console.log("fail")
                const errorResponse = err.response.data.errors
                const errorArr = []
                for( const key of Object.keys(errorResponse)){ // key = "title"
                  errorArr.push(errorResponse[key]["message"]) 
                }
                setErrors(errorArr)
            })
    }


    return (

        <div>

            <h3>Update the Product Information</h3>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>   
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>   
                </div>

                <div>
                    <label>Description</label>
                    <input type="text" name="discription" value={discription} onChange={(e) => setDiscription(e.target.value)}/>   
                </div>

                <button>Submit</button>

            </form>

            {
                errors.map((err, i)=>(
                    <p key={i} style={{color:"red"}}>{err}</p>
                ))
            }

        </div>

    ) 

}

export default Edit;