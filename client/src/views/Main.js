import React, {useEffect, useState} from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
    
// Show All Products & Create (NEW) Product
const Main = () => {
    const [products, setProducts] = useState()
    const [refresh, setRefresh] = useState(true)
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>setProducts(res.data))
            .catch(err => console.error(err))
    }, [refresh]);

    const reload = () => {
        setRefresh(!refresh)
    }

    
    return (
        <div>

            {/* Create (NEW) */}
           <ProductForm reload={reload}/>

            <hr/>

            {/* Show All */}
           {products && <ProductList products={products} reload={reload}/>} 

        </div>
    )
}
    
export default Main;