import React from 'react'
import { useDispatch } from 'react-redux';

const Card = ({item,btntext,feature}) => {

  let dispatch = useDispatch()

  function handleBtn(product){
    console.log(product);
    dispatch(feature( product ));
  }

  return (
    <article>
        <figure>
            <img src={item.image} alt="" />
        </figure>
        <section className='contentwrapper' >
            <h1>{item.title}</h1>
            { item.quantity ? <p>Quantity:{item.quantity}</p> : "" }
            <h2>&#8377; {item.price} </h2>
        </section>
        <button onClick={()=>handleBtn(item)} >{btntext}</button>
    </article>
  )
}

export default Card