import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../Context/Api";
import { Col, Container, Row } from "react-bootstrap";
import { ReturnButton } from "../../components/ReturnButton";
import { PokemonContext } from "../../Context";
import { PokemonsLoading } from "../../components/PokemonsLoading";

const Profile = () => {
  const { loading, setLoading } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState([]);
  const { pokemonId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async (pokemonId) => {
      const response = await api.get(`${pokemonId}`);
      setPokemon(response.data);
      setLoading(false);
    };

    getData(`${pokemonId}`);
  }, [pokemonId]);

  console.log(pokemon);

  return (
    <>
      {loading ? <PokemonsLoading /> : null}
      {!loading ? (
        <Container className="my-5 text-center">
          <ReturnButton />
          <h1 className="fs-1">{pokemon.name}</h1>
          <Row>
            <Col md={6}>
              <h3>Habilidades</h3>
              <div>
                {pokemon.abilities?.map((element, index) => (
                  <p key={index}>{element.ability.name}</p>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <img src={pokemon.sprites?.back_default} />
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  );
};

export { Profile };
