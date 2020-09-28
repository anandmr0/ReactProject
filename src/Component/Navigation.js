import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useSpring, animated, useTransition} from 'react-spring'
import NavigationMenu from './NavigationMenu'

import {
    BrowserRouter as Router,
    Link
    
  }from 'react-router-dom';  

function Navigation()
{

    const[showMenu,setMenu]=useState(false);
    const menutransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })

        const Masktransitions = useTransition(showMenu, null, {
            from: { opacity: 0 , transform: 'translate3d(0,-40px,0)' },
            enter: { opacity: 1 ,transform: 'translate3d(0,0px,0)' },
            leave: { opacity: 0 ,transform: 'translate3d(0,-40px,0)' },
            })
   

    return(
        
            <nav>
                <span className="text-xl">
               
                <FontAwesomeIcon icon={faBars} onClick={()=>setMenu(!showMenu)}></FontAwesomeIcon>
               
                </span>
                {
                Masktransitions.map(({ item, key, props }) =>
                   item && <animated.div key={key} style={props}
                   className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                   onClick={()=>setMenu(false)}>
                       
                   </animated.div>
                   )}
               {
                   menutransitions.map(({ item, key, props }) =>
                   item && <animated.div key={key} style={props}
                   className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                   onClick={()=>setMenu(false)}>
                      
                      <NavigationMenu closemenu={()=>setMenu(false)}></NavigationMenu>
                   </animated.div>
                   )
               }
               
              

            </nav>
           
    );
}

export default Navigation