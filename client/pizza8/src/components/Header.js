import React from 'react'
import { Navbar, NavbarBrand} from 'reactstrap';

function Header() {
  return (
    <div className='header'>
         <Navbar dark color="success">

          <div className="container">
            <NavbarBrand href="/">Pizza 8</NavbarBrand>
          </div>

        </Navbar>

    </div>
  )
}

export default Header