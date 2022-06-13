import React from 'react'
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const[show,setShow] = React.useState(false)
  return (
    <>
        <div className='navbar'>
            <div className='container'>
            <div className='Navabr_left'>
               <img src="images/logo.png" alt="logo" />
            </div>
            <div className='Navabr_right'>
            
               <ul className='desktop_menu_bar'>
                  <li>Home</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
                </ul>

                {
                  show?
                  <ul className='mobile_menu_link'>
                  <li>Home</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
                </ul>: null
                }
                <div className='mobile_menu_bar'>
                    <div className='menu_bar'>
                        <span onClick={()=>setShow(!show)}><FaBars/></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar