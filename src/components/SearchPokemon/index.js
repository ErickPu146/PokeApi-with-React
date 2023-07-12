import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PokemonContext } from "../../Context";

const SearchPokemon = () => {
  const { searchPokemon, viewAllPokemons } = useContext(PokemonContext);

  const [pokemonName, setPokemonName] = useState("");
  const [searched, setSearched] = useState(false);

  const saveName = (text) => {
    setPokemonName(text.toLowerCase());
  };

  const accionButton = (e) => {
    const textContent = e.target.textContent;

    if (textContent === "Buscar") {
      if (pokemonName.trim() !== "") {
        searchPokemon(pokemonName.trim());
        setPokemonName("");
        setSearched(true);
      } else {
        setPokemonName("");
      }
    } else {
      viewAllPokemons();
      setSearched(false);
    }
  };

  return (
    <>
      <div>
        <Form.Control
          value={pokemonName}
          onChange={(e) => saveName(e.target.value)}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      <Button onClick={accionButton}>
        {!searched || pokemonName !== "" ? "Buscar" : "Ver todos"}
      </Button>
    </>
  );
};

export { SearchPokemon };
