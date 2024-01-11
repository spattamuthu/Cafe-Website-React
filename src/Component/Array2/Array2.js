import React, { Component } from 'react';
import "./Array2.scss"
export class Array2 extends Component{

    render(){
        // let Images=[
        //     {
        //         image:"https://static.wixstatic.com/media/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg/v1/fill/w_673,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg"
        //        },
        //     {
        //      id:"1",
        //      head:"Enjoyy.",
        //      para:"Make Yourself at Home",
        //      para2:"I'm a paragraph. Click here to add your own ",
        //      para3:"I m a great place for you to tell a story and let ",
        //      para4:" users know a little more about you."
        //     }
           
        //  ]
         
        return(
            <div class="Array2-full-content">
           
                    
                     <div class="container-arr2">
                        <div class="sec2-img-container-2"> 
                                  <img src={"https://static.wixstatic.com/media/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg/v1/fill/w_673,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg"} style={{width:"674px"}}/>
                             </div>
                            <div class="sec2-para-container">
                                  <h1 style={{fontSize:"5rem"}}>Enjoyy.</h1> 
                                  <p class="single-line">Make Yourself at Home</p>
                                <div class="para-from-arrray2">  
                                  <p> I'm a paragraph. Click here to add your own</p>
                                  <p>I m a great place for you to tell a story and let</p>
                                  <p>users know a little more about you.</p>
                                  <button class="array-btn">Visit Us</button>
                                 </div> 
                                  
                            </div>
                             
                              </div>
                    
                
        </div>
       )
    }
}