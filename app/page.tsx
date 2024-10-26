import React from 'react'
import Contactus from "./contact/page"
import Aboutus from "./about/page"
import Myfunction from "./Footer/page"
import Myheader from "./header/page"
import Myservices from "./services/page"
import footer from "./Footer/page"
const  page = () => {
  return (
    <div>
      <footer />
      <ul>
        <li><a href='./'>Home</a></li>
        <li><a href='./about'>About</a></li>
        <li><a href='./contact'>Contact</a></li>
        <li><a href='./services'>Services</a></li>
      </ul>

    </div>
     

  )

}

export default page
