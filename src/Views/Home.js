import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Loader from '../Component/Loader'
import ProductCard from '../Component/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';
function Home()
{
    const {id}=useParams();
    const url="https://5f6f7281adc24200166e10eb.mockapi.io/products?page=1&limit=10"
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
     content=products.data.map((product)=>
     <div key={product.id}>
         {
             <ProductCard products={product}/>
            
         }
     </div>
     )
    }
    return(
        <div>
          <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
             
             {content}
        </div>
        
    );
}

export default Home