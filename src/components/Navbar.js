import React from 'react'
import Avatar from "./Avatar"


function Navbar() {
    let username;
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src={Avatar} width="50" height="50" alt="Avatar"
                    className="d-inline-block align-top rounded-circle mr-3" />
                {username}
            </a>
        </nav>
    )
}

export default Navbar