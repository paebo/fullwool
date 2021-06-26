import React from "react";
import { Link } from "react-router-dom"

import Bio from "../components/Bio"
import profilePic from "../static/d2hgn8z-a19806b0-019c-46ef-8285-c375e945c07b.jpg"

function About() {
// TODO: prepare for useState/useEffect

    return (
        <div class="aboutCardContainer">
            <h1>Rólam</h1>
            <div class="aboutCard">
                <img src={ profilePic } id="profilePic" height="200px" width="150px" alt="asd"></img>
                <div class="container">
                    <Bio />
                    <Link class="contactBtn" to="/contact">Kapcsolat</Link>
                </div>
            </div>
        </div>
    );
}

export default About;