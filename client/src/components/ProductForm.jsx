import React, {useState} from 'react';
import axios from 'axios';


// Create (NEW) Form
const ProductForm = (props) => {

        const [title, setTitle] = useState("")
        const [price, setPrice] = useState(0)
        const [discription, setDiscription] = useState("")
        const [errors, setErrors] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {title, price, discription})
            .then(res => {
                props.reload()
                clearForm()
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr =[]
                for(const key of Object.keys(errorResponse)){ // key = "title"
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })
    }

    const clearForm = () => {
        setTitle("")
        setPrice(0)
        setDiscription("")
    }


    return (

        <div>

            <h2>Product Manager</h2>

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
                    <label>Discription</label>
                    <input type="text" name="discription" value={discription} onChange={(e) => setDiscription(e.target.value)}/>   
                </div>

                <button>Create</button>

            </form>

            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }

            {/* <div>
                <h3>Your Form Data</h3>
                <p>Title: {title}</p>
                <p>Price: {price}</p>
                <p>Discription: {discription}</p>
            </div> */}

        </div>
    ) 

}

export default ProductForm
