import React from 'react'

const Contacts = ({ contacts }) => {
    return (
        <div>
            <h3>Érdeklődj Telefonon!</h3>
            <h2>{contacts.phone}</h2>
            <h3>Írj Nekem E-mailt!</h3>
            <h2>{contacts.email}</h2>
            <h3>Cégünk Székhelye!</h3>
            <h2>{contacts.company_address}</h2>
        </div>
    )
}

export default Contacts