import React, { Component } from 'react';
import "./Footer.scss"
export class Footer extends Component {
        render(){
            return(
                <div>
                    <div class="footer-full-content">
                        <div class="footer-1">
                            <h1>Newsletter</h1>
                            <p>Stay up to date with all the latest from<br></br>47th Cafe..!</p>
                            <p>E-mail</p>
                            <input type="text"/>
                        </div>

                        <div class="footer-2">
                            <h1>Talk to Us</h1>
                            <p>123-456-7890<br></br>infotype@gmail.com</p>
                            <p>500 Terry Francine St.<br></br>San Francisco, CA 94158</p>
                        </div>

                        <div class="footer-3">
                            <h1>Instagram</h1>
                            <h1>Facebook</h1>
                            <h1>Twitter</h1>
                        </div>
                    </div>
                </div>
            )
        }

}