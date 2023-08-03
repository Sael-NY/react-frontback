import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";


const HeaderAdmin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("jwt");

        navigate("/login");
    };

    const jwt = Cookies.get("jwt");
    const user = jwtDecode(jwt);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/admin"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={"/admin/coworkings"}>Liste des coworkings</Link>
                    </li>
                    <li>
                        <Link to={"/admin/coworkings/create"}>Ajouter un coworking</Link>
                    </li>
                    <li>
                        <p>Connecté en tant que {user.data.username}</p>
                    </li>
                    <li>
                        <a href="#" onClick={handleLogout}>
                            Se déconnecter
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderAdmin;