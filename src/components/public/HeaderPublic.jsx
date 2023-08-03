import React from 'react'
import { Link } from 'react-router-dom';

const HeaderPublic = () => {

    return (
        <div>
            <ul>
                <li><Link to="/public">Accueil</Link></li>
                <li><Link to="/public/coworkings">Coworkings</Link></li>
                <li><Link to="/public/login">Login</Link></li>
            </ul>
        </div>
    )
}

export default HeaderPublic