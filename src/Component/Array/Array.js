import React from "react";
import "./Array.scss"
export var Array=()=>{
    // let Images=[
    //    {
    //     id:"1",
    //     head:"Eat.",
    //     para:"Breakfast, Lunch and Artisanal Pastries",
    //     para2:"I'm a paragraph. Click here to add your own ",
    //     para3:"I m a great place for you to tell a story and let ",
    //     para4:" users know a little more about you."
    //    },
    //    {
    //     image:"https://static.wixstatic.com/media/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg/v1/fill/w_676,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg"
    //    }
    // ]

   return(
    <div class="array-container">
      
                 {/* <div> */}
                        <div class="sec1-container">
                              <h1 style={{fontSize:"5rem"}}>Eat.</h1> 
                              <p class="pppp">Breakfast, Lunch and Artisanal Pastries</p>
                            <div class="arr-para">  
                              <p>I'm a paragraph. Click here to add your own</p>
                              <p>I m a great place for you to tell a story and let</p>
                              <p>users know a little more about you.</p>
                             </div> 
                               <button class="array-btn">See More</button> 
                        </div>
                         <div class="sec2-container"> 
                              <img src={"https://static.wixstatic.com/media/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg/v1/fill/w_676,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg"} style={{width:"674px"}}/>
                         </div>
                          </div>
                
            
    // </div>
   )
}