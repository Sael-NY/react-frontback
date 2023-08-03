import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import HeaderPublic from "../../components/public/HeaderPublic";

const CoworkingsPagePublic = () => {
    const [coworkings, setCoworkings] = useState([]);

    let isUserConnected = false

    const jwt = Cookies.get("jwt");

    if (jwt) {

        const decodedJwt = jwtDecode(jwt)
        const role = decodedJwt.data.role;

        if (role === 1 || role === 2 || role === 3) {
            isUserConnected = true
        }
    }

    const fetchCoworkings = async () => {
        const response = await fetch("http://localhost:3010/api/coworkings", {
            method: "GET",
        });
        const responseJs = await response.json();
        setCoworkings(responseJs.data);
    };

    useEffect(() => {
        fetchCoworkings();
    }, []);

    const handleCreateReview = async (event, coworkingId) => {
        event.preventDefault();


        const content = event.target.content.value;
        const rating = event.target.rating.value;

        const reviewCreateData = {
            content: content,
            rating: parseInt(rating),
        };


        const responseReview = await fetch(`http://localhost:3010/api/reviews/${coworkingId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(reviewCreateData),
        });

        const responseReviewJs = await responseReview.json();

        console.log(responseReviewJs);
    };

    return (
        <>
            <div>
                <HeaderPublic />
                <h1>Liste des coworkings</h1>
                {coworkings.map((coworking) => (
                    <div key={coworking.id}>
                        <h2>{coworking.name}</h2>
                        <p>
                            Adresse :{coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
                            {coworking.address.city}
                        </p>

                        {isUserConnected && (
                            <form onSubmit={(event) => handleCreateReview(event, coworking.id)}>
                                <label htmlFor="content">Votre review</label>
                                <textarea name="content" rows="4" cols="50"></textarea>

                                <label htmlFor="rating">Votre note</label>
                                <input type="number" name="rating" min="0" max="5" />

                                <button type="submit">Créer la review</button>
                            </form>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default CoworkingsPagePublic