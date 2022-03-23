// import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
// import { useParams } from "react-router-dom";
    
// Show All
const ProductList = (props) => {

    // const { products } = props
    // const [products, setProducts] = useState()
    // const {id} = useParams();


    // useEffect(()=>{
    //     axios.get(`http://localhost:8000/api/products/${id}`)
    //     .then(res=>setProducts(res.data))
    //     .catch(err=>console.log(err.response))
    // }, [])

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(res=>{
                props.reload()
            })
            .catch(err => console.log(err))
    }


    return (

        <><div>

            <h2>All Products</h2>

        </div>
        
        <table>
            <thead>
                <tr>
                    <th> Title </th>
                    {/* <th> Price </th>
                    <th> Discription </th> */}
                    <th colSpan={2}> Actions</th>
                </tr>
            </thead>

            <tbody>

                {props.products.map((product, i) => {

                    return (

                        <tr key={i}>

                            <td> <Link to={`/detail/${product._id}`}>{product.title} </Link></td>
                            <td> <button><Link to={`/edit/${product._id}`}> Edit</Link></button></td>
                            <td> <button onClick={() => handleDelete(product._id)}> Delete</button></td>

                        </tr>

                    );

                })}

            </tbody>
    
        </table></>
        
    )
}
    
export default ProductList;