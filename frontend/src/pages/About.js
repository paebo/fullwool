import React from "react";
import { Link } from "react-router-dom"
import profilePic from "../static/d2hgn8z-a19806b0-019c-46ef-8285-c375e945c07b.jpg"

function About() {
// Really basic about page
// TODO: research css in order to make the page look nice, prepare for useState/useEffect

    return (
        <div class="aboutCardContainer">
            <h1>Rólam</h1>
            <div class="aboutCard">
                <img src={ profilePic } id="profilePic" height="200px" width="150px" alt="asd"></img>
                <div class="container">
                    <h2>Insert Name Here</h2>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h4>
                    <Link class="contactBtn" to="/contact">Kapcsolat</Link>
                </div>
            </div>
        </div>
    );
}

export default About;