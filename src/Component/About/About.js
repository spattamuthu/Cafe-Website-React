import React, { Component } from 'react';
import "./About.scss"

   

export class About extends Component{

    render(){
        return(
    <div>
         <div class="about-full-content">
      
             <h1>Drop By for a Bite.</h1>
         
               <div class="about-para">
                   <div>
                     <h3>Address</h3>
                      <p>500 Terry Francine St.<br></br>San Francisco, CA 94158</p>
                   </div>
                   <div>
                    <h1>|</h1>
                   </div>
                   <div>
                     <h3>Opening Hours</h3>
                      <p>Mon - Fri: 9am - 6pm<br></br>​​Saturday: 10am - 2pm<br></br>Sunday: Closed</p>
                   </div>
              </div>
           </div>
       </div>
        )
    }
}
