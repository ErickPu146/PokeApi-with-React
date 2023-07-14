import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../Context";

const ReturnButton = () => {
  const { fetchPokemons, setLoading, viewAllPokemons, pokemons } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const returnHome = () => {
    if (pokemons.length === 0) {
      fetchPokemons();
      setLoading(true);
    } else {
      viewAllPokemons();
    }
    navigate("/");
  };

  return (
    <>
      <Button onClick={returnHome} size="lg" className="p-2 btn-primary d-flex">
        <i className="bi bi-caret-left-fill"></i>{" "}
        <i className="bi bi-caret-left-fill"></i>
      </Button>
    </>
  );
};

export { ReturnButton };
