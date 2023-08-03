import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import HeaderPublic from "../../components/public/HeaderPublic";

const LoginPage = () => {

    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        const loginResponse = await fetch("http://localhost:3010/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ username, password }),
        });


        if (loginResponse.status === 200) {
            const loginData = await loginResponse.json();
            const jwt = loginData.data;

            Cookies.set("jwt", jwt);

            const user = jwtDecode(jwt);



            // si l'utilisateur a le rôle user
            // on le redirige vers l'accueil public
            if (user.data.role === 1) {
                navigate("/");
            } else {
                navigate('/admin')

            }
        }
    };

    return (
        <HeaderPublic />,
        <form onSubmit={handleLoginSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>

            <input type="submit" />
        </form>

    );
};

export default LoginPage;