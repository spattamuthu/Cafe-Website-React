
import React, { Component } from 'react';

  

export class Gallery extends Component{

    render(){
        var GalleryImage=[
            {
             image1:"https://static.wixstatic.com/media/c837a6_81d939f67f774d688ab6c00798633c93~mv2.jpg/v1/fill/w_270,h_359,q_90/c837a6_81d939f67f774d688ab6c00798633c93~mv2.jpg", 
             image2:"https://static.wixstatic.com/media/c837a6_6d5b30895ef24c53ab446b93a107a6f0~mv2.jpg/v1/fill/w_270,h_359,q_90/c837a6_6d5b30895ef24c53ab446b93a107a6f0~mv2.jpg", 
             image3:"https://static.wixstatic.com/media/c837a6_1b6492bb36aa454383353353445c3026~mv2.jpg/v1/fill/w_270,h_359,q_90/c837a6_1b6492bb36aa454383353353445c3026~mv2.jpg", 
             image4:"https://static.wixstatic.com/media/c837a6_528fac98ab7549999cdc047acf09e94d~mv2.jpg/v1/fill/w_270,h_359,q_90/c837a6_528fac98ab7549999cdc047acf09e94d~mv2.jpg", 
             image5:"https://static.wixstatic.com/media/c837a6_901e74dd86954fe5acdec3ff08ee2d42~mv2.jpg/v1/fill/w_269,h_359,q_90/c837a6_901e74dd86954fe5acdec3ff08ee2d42~mv2.jpg",   
            }
        ]
        
        return(
      <div>      
       <div class="about-full-section">
           {
            GalleryImage.map((val)=>{
                
                return(
                    <div class="gallery-full-image">
                       <img src={val.image1} alt="pic1"/> 
                       <img src={val.image2} alt="pic2"/> 
                       <img src={val.image3} alt="pic3"/> 
                       <img src={val.image4} alt="pic4"/> 
                       <img src={val.image5} alt="pic5"/> 
                       
                    </div>

                )
            })
           }
       </div>
       </div>
        )
    }
}
