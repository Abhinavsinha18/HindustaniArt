import React from 'react'
import "../footer/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div>
   

<footer className="new_footer_area bg_color">
<div className="container">
  <div className="row">
    <div className="footer-col">
        <div style={{display:'flex',alignItems:'center'}}>
<h2>Hidustani Artist</h2>
        </div>
<ul>
        <li><a href="#">quotes</a></li>
       
      </ul>
    
    </div>
    <div className="footer-col">
      <h4>company</h4>
      <ul>
        <li><a href="#">about us</a></li>
        <li><a href="#">our services</a></li>
        <li><a href="#">privacy policy</a></li>
        <li><a href="#">affiliate program</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>online shop</h4>
      <ul>
        <li><a href="#">watch</a></li>
        <li><a href="#">bag</a></li>
        <li><a href="#">shoes</a></li>
        <li><a href="#">dress</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>follow us</h4>
      <div className="social-links">
     
        <a href="#"> <FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"> <FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"> <FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"> <FontAwesomeIcon icon={faLinkedin} /></a>
       
      </div>
    </div>
  </div>
</div>

 
 
 
  <div className="new_footer_top">
  
    <div className="footer_bg">
      <div className="footer_bg_one" />
      <div className="footer_bg_two" />
    </div>
  </div>

</footer>


    </div>
  )
}

export default Footer