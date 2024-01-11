import React, { Component } from 'react';

export class Array3 extends Component{

    render(){
        // let Images=[
        //     {
        //      id:"1",
        //      head:"Enjoyy.",
        //      para:"Make Yourself at Home",
        //      para2:"I'm a paragraph. Click here to add your own ",
        //      para3:"I m a great place for you to tell a story and let ",
        //      para4:" users know a little more about you."
        //     },
        //     {
        //      image:"https://static.wixstatic.com/media/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg/v1/fill/w_676,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg"
        //     }
        //  ]
         return(
            <div class="array-container">
               
                        
                         {/* <div class="array3-full-content"> */}
                                <div class="sec1-container">
                                      <h1 style={{fontSize:"5rem"}}>Enjoyy.</h1> 
                                      <p class="pppp">Make Yourself at Home</p>
                                    <div class="arr-para">  
                                      <p>I'm a paragraph. Click here to add your own</p>
                                      <p>I m a great place for you to tell a story and let </p>
                                      <p>users know a little more about you.</p>
                                     </div> 
                                       <button class="array-btn">Visit Us</button> 
                                </div>
                                 <div class="sec2-container"> 
                                      <img src={"https://static.wixstatic.com/media/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg/v1/fill/w_676,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg"} style={{width:"674px"}}/>
                                 </div>
                                  </div>
                         
            // </div>
           )
        }
    }
    
