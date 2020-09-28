import React from 'react'

import Navigation from './Navigation'

class Header extends React.Component{

    render(){
        return(
            <header class="border-p  p-3 flex justify-between">
                <section class="font-bold">My App</section>
              <Navigation></Navigation>
            </header>
        )
    }

}
export default Header