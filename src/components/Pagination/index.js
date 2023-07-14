import { useContext } from "react";
import { Button } from "react-bootstrap";
import { PokemonContext } from "../../Context";

const PaginationPokemon = () => {
    const {
        backPage, nextPage, offset
    } = useContext(PokemonContext)

    console.log(offset)

    return (
        <>
        <div className="w-100 d-flex justify-content-center gap-3 my-3">
        <Button onClick={backPage} size="lg" variant="warning" className={offset === 1 ? 'disabled' : ''}><i className="bi bi-arrow-left"></i></Button>
        <Button onClick={nextPage} size="lg" variant="warning"><i className="bi bi-arrow-right"></i></Button>
        </div>
        </>
    );
}

export { PaginationPokemon };