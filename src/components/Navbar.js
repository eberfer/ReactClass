import React from 'react'
import Avatar from "./Avatar"

function Navbar() {
    let username;
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <Avatar/>
                {username}
            </a>
        </nav>
    )
}

export default Navbar