import React from "react";
import { NavLink } from "react-router-dom";
import rightimage from "./sath.jpg";

const Home=()=>
{
    return(
       <>
         {/*  hero section  */}
        <div className="header_hero">
        <div className="container" >
          <div className="row">
            {/*  left side column */}
            <div className="col-lg-6  col-10 mx-auto " id="leftcolumn">
            <h1 className="home-head"> 
            <strong className="home-stronghead"> SATHYABAMA UNIVERSITY</strong>
            </h1>
            <h2 className="home-head2">
            Team of talented FACULTIES making STUDENTS THINK OUT OF THE BOX.
            </h2>
            <h2 className="home-head3">
            HOLDING ALL INDIA RANK OF 50
            </h2>
              <p className="home-quotepara">“entry is not immportant .exit is important” 
            –COLONEL JPR
              </p>
                 <NavLink  to="/contact" className="home-button">Get Started</NavLink>
            </div>


            {/*  Right side column  */}
            <div class="col-lg-6   col-10 mx-auto" id="rightcolumn">
            <img src={rightimage} className="rightimage" alt="rightimage"/>

            </div>
            </div>
        </div>
        </div>
        </>   
    );
}

export default  Home;