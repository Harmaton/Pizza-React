import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';


function Header() {
  return (
    <div className='header'>
        <>
         <Navbar dark color="success">

          <div className="container">
            <NavbarBrand href="/">Pizza 8</NavbarBrand>
          </div>
        </Navbar>

        <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Pizza 8 Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>

     </>
    </div>
  )
}

export default Header