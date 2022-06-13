import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaPlay} from "react-icons/fa";

const Banner = () => {
const[state] = React.useState({
  title: 'I am Naqui Hasan',
  text  : "i'm Naqui, professional UI Developer with long time experience in this field",
  image : 'images/naqui.png'
}) 
  return (  
    <section className='header'>
       <div className='container'>
           <div className='row'>
             <div className='col-7'>
                  <div className='header__content_inner'>
                    <ul className='header_social_media_icons'>
                      <li>
                        <FaFacebookF/>
                        </li>
                      <li>
                        <FaInstagram/>
                      </li>
                      <li>
                        <FaTwitter/>
                      </li>
                      <li>
                        <FaPinterest/>
                      </li>
                    </ul>
                    <h1>{state.title}</h1>
                    <p>{state.text}</p>
                    <p>{state.test}</p>
                  </div>
                  <div className='button_group'>
                  <button className='my_portfolio'>My Portfolio</button>
                  <button className='play_button'><FaPlay/></button>
                  </div>
             </div>
             <div className='col-5'>
                <img src={state.image}  alt='Man-01' style={{width:300, height:500}}/>
             </div>
           </div>
       </div>
    </section>
   
  )
}

export default Banner