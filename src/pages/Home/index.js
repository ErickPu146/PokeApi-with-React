import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { PokemonContext } from "../../Context";
import { Pokemon } from "../../components/Pokemon";
import { PokemonsLoading } from "../../components/PokemonsLoading";
import { SearchPokemon } from "../../components/SearchPokemon";
import PokemonLogo from "./images/International_Pokémon_logo.svg.png";
import "./home.css";
import { PokemonError } from "../../components/PokemonError";

const Home = () => {
  const { loading, pokemons, error } = useContext(PokemonContext);

  console.log("pokemons", pokemons);
  console.log("error", error);

  return (
    <>
      <Container>
        <header className="d-flex flex-column justify-content-center align-items-center my-2 my-lg-5">
          <img src={PokemonLogo} className="pokemon-logo" />
          <SearchPokemon />
        </header>


        <Table responsive striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Generacion</th>
              <th>Experiencia base</th>
              <th>Peso</th>
              <th>Ver mas informacion</th>
            </tr>
          </thead>
          {loading ? <PokemonsLoading /> : null}

          {error === true ? (
          <tbody>
            <PokemonError />
          </tbody>
        ) : null}

          {!loading ? (
            <tbody>
              {pokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
              ))}
            </tbody>
          ) : null}
        </Table>
      </Container>
    </>
  );
};

export { Home };
