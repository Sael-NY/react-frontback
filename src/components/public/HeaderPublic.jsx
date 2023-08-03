import React from 'react'
import { Link } from 'react-router-dom';

const HeaderPublic = () => {

    return (
        <div>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/coworkings">Coworkings</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    )
}

export default HeaderPublic