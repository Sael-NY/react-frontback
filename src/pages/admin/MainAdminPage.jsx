import HeaderAdmin from "../../components/admin/HeaderAdmin";
import { useEffect } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const MainAdminPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const jwt = Cookies.get("jwt");

        // s'il existe pas, ça veut que l'utilisateur n'est pas connecté
        // on le redirige vers la page de login
        if (!jwt) {
            navigate("/login");
        }

        // on décode le jwt
        const user = jwtDecode(jwt);

        console.log(user)

        // si l'utilisateur a le rôle user
        // on le redirige vers l'accueil public
        if (user.data.role === 1) {
            navigate("/");
        }
    }, [])
    return (
        <>
            <HeaderAdmin />

            <h2>Bienvenue à toi, le créateur de cette page !</h2>
        </>
    );
};

export default MainAdminPage;