import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
  <div  className='container' >
            <ol>
            <li> <Link to={'/'}>Homepage</Link></li>
            <li> <Link to={'abt'}>About Us</Link></li>
            <li> <Link to={'service'}>Services</Link></li>
            <li><Link to={'product'}>Product List </Link> </li>
            <li> <Link to={'contactus'}>Contact Us </Link> </li>
        </ol>
    
    </div>
    
  )
}

export default Navbar