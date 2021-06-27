import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import Bio from "../components/Bio"

function About() {
    const [about, setAbout] = useState({})

    useEffect(() => {
        const getAbout = async () => {
            const aboutFromServer = await fetchAbout()
            setAbout(aboutFromServer[0])
        }
        getAbout()
    }, [])

    const fetchAbout = async () => {
        const res = await fetch("http://localhost:8088/about")
        const data = await res.json();
        return data
    }

    return (
        <div class="cardContainer">
            <h1>Rólam</h1>
            <div className="aboutCard cardHover">
                <div className="container">
                    <Bio about={about} />
                    <Link class="contactBtn" to="/contact">Kapcsolat</Link>
                </div>
            </div>
        </div>
    );
}

export default About;