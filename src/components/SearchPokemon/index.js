import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PokemonContext } from "../../Context";

const SearchPokemon = () => {
  const { searchPokemon, viewAllPokemons, error } = useContext(PokemonContext);

  const [pokemonName, setPokemonName] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setSearched(false)
  }, [error])

  const saveName = (text) => {
    setPokemonName(text.toLowerCase());
  };

  const confirmSearh = () => {
    if (pokemonName.trim() !== "") {
      searchPokemon(pokemonName.trim());
      setPokemonName("");
      setSearched(true);
    } else {
      setPokemonName("");
    }
  }

  const returnPokemons = () => {
    viewAllPokemons();
    setSearched(false);
  }

  return (
    <>
      <div className="mt-2 mt-lg-4 d-flex">
        <Form.Control
          value={pokemonName}
          onChange={(e) => saveName(e.target.value)}
          type="search"
          placeholder="Search"
          aria-label="Search"
          size="lg"
          className="rounded-0 rounded-start"
        />

        <Button size="lg" onClick={confirmSearh} className={`${searched && pokemonName === "" ? "d-none" : "d-block"} ${pokemonName.trim() !== "" ? "btn-success" : "btn-primary"} rounded-0 rounded-end d-flex`}>
          <i className="bi bi-search"></i>
        </Button>
        <Button size="lg" onClick={returnPokemons} className={`${!searched || pokemonName !== ""  ? "d-none" : "d-block"} btn-primary rounded-0 rounded-end d-flex`}>
          <i className="bi bi-caret-left-fill"></i> <i className="bi bi-caret-left-fill"></i>
        </Button>
      </div>
    </>
  );
};

export { SearchPokemon };
