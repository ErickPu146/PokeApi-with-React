import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { PokemonContext } from "../../Context";
import { Pokemon } from "../../components/Pokemon";
import { PokemonsLoading } from "../../components/PokemonsLoading";
import { SearchPokemon } from "../../components/SearchPokemon";
// import "./home.css"

const Home = () => {
  const { loading, pokemons } = useContext(PokemonContext);

  console.log("pokemons", pokemons);

  return (
    <>
      {loading ? <PokemonsLoading /> : null}
      {!loading ? (
        <Container>
          <header className="d-flex flex-column justify-content-center align-items-center my-5">
            <h1 className="fs-1 text-center">PokeApi</h1>
            <SearchPokemon/>
          </header>
          <Table responsive striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Generacion</th>
                <th>Experiencia base</th>
                <th>Peso</th>
                <th>Vermas informacion</th>
              </tr>
            </thead>
            <tbody>
              {pokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
              ))}
            </tbody>
          </Table>
        </Container>
      ) : null}
    </>
  );
};

export { Home };
