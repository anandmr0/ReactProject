import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Loader from '../Component/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests';
function Products()
{
    const {id}=useParams();
    const url=`https://5f6f7281adc24200166e10eb.mockapi.io/products/${id}`
    let products=useAxiosGet(url);
    let content=null;
  
    if(products.error)
    {
        content=<p>There was an error please refresh or try again </p>
    }
    if(products.loading)
    {
        content=<Loader></Loader>
    }
   if(products.data)
   {
    content= 
    <div>
    <h1 className="text-2xl font-bold mb-2">
        {products.data.name}
    </h1>
    <div>
        <img src={products.data.images} alt={products.data.name}>
        </img>
    </div>
    <div className="font-bold text-xl mb-2">
        ${products.data.price}
    </div>
    <div>
        {products.data.description}
    </div>
</div>
   }
   return(
    <div>
       {content}
    </div>
);
    
}

export default Products