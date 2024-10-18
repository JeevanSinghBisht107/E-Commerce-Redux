import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
import { addtocart } from '../redux/cartSlice';

const Products = () => {

    let[ products,setProducts ] = useState(null)

    useEffect(()=>{
        async function fetchProducts(){
            let { data } = await axios.get("https://fakestoreapi.com/products");
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    },[])

  return (
    <div>
        <h1>Products</h1>
        <section id='productswrapper' > 
            {
                products?.map((item) => {
                    return <Card key={item.id} item={item} btntext="add to cart" feature={addtocart} ></Card>
                })
            }
        </section>
    </div>
  )
}

export default Products