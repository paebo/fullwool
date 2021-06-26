import { useState, useEffect } from "react";

import Contacts from "../components/Contacts"

export default function Contact() {
    const [contact, setContact] = useState({})

    useEffect(() => {
        const getContact = async () => {
            const contactFromServer = await fetchContact()
            setContact(contactFromServer[0])
        }
        getContact()
    }, [])

    const fetchContact = async () => {
        const res = await fetch("http://localhost:8088/contact")
        const data = await res.json();
        return data
    }

    return (
        <div className="cardContainer">
            <h1>Kapcsolat</h1>
            <div className="contactCard">
                <div className="container">
                    <Contacts contacts={contact} />
                </div>
            </div>
        </div>
    );
}
