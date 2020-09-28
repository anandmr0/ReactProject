import React from 'react'
import {
    BrowserRouter as Rautor,
    Link
} from 'react-router-dom'


function NavigationMenu(props)
{
        return(

            <div>
                <div className="font-bold py-3">
                AppName 
                </div>
                <ul>
                           <li>
                               <Link to="/" class="text-blue-500 py-3 border-t border-b block" onClick={props.closemenu}>Home</Link></li>
                           <li>
                           <Link to="/about" class="text-blue-500 py-3 border-t border-b block" onClick={props.closemenu}>About</Link></li>
                       </ul>
            </div>
                        
                    
                       
                      
                       
           
        );
}

export default NavigationMenu