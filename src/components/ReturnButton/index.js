import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../Context";

const ReturnButton = () => {
    const {
        viewAllPokemons
    } = useContext(PokemonContext);

    const navigate = useNavigate()

    const returnHome = () => {
        viewAllPokemons()
        navigate('/')
    }

    return (
        <>
            <Button onClick={returnHome}>
                Regresar
            </Button>
        </>
    );
}

export { ReturnButton };