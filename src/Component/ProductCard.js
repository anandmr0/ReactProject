import React from 'react'
import {
    
    Link
} from 'react-router-dom'

function ProductCard(props)
{
        return(
            <div className="border mb-4 rounded overflow-hidden">
                <Link to={`/products/${props.products.id}`}>
               <div style={{'backgroundImage':`url('${props.products.images}')`}}
               
               className="w-full h-64 bg-blue bg-cover">

               </div>
              </Link>
              <div className="p-3">              
              <h3 className="font-bold text-xl mb-3">
                <Link to={`/products/${props.products.id}`}>
                    {props.products.name}
                </Link>
                </h3>
              </div>
              <div className="font-bold-mb-3">
                ${props.products.price}
              </div>
              <div className="mb-3">
                ${props.products.description}
              </div>
              <Link to={`/products/${props.products.id}`}
              className="bg-blue-500 text-white p-2 flex justify-center w-full"
              >View
                   
                </Link>
            </div>
        )
}

export default ProductCard