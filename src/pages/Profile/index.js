import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../Context/Api";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ReturnButton } from "../../components/ReturnButton";
import { PokemonContext } from "../../Context";
import { PokemonsLoading } from "../../components/PokemonsLoading";
import "./profile.css";


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
      {loading ? (
        <div className="pt-5">
          <PokemonsLoading />
        </div>
      ) : null}

      {!loading ? (
        <Container className="my-5 text-center">
          <ReturnButton />
          <h1 className="pokemon-name pokemon-info">{pokemon.name}</h1>

          <Card className="position-relative">
            <div className="d-flex gap-2">
              <Card.Img
                variant="top"
                src={pokemon.sprites?.front_default}
                alt="image pokemon"
              />
              <Card.Img
                variant="top"
                src={pokemon.sprites?.back_default}
                alt="image pokemon"
              />
              <Card.Img
                variant="top"
                src={pokemon.sprites?.front_shiny}
                alt="image pokemon"
              />
              <Card.Img
                variant="top"
                src={pokemon.sprites?.back_shiny}
                alt="image pokemon"
              />
            </div>

            <Card.Body>
              <Card.Title>Habilidades</Card.Title>
              {pokemon.abilities?.map((element, index) => (
                <p key={index}>
                  {index + 1}. {element.ability.name}
                </p>
              ))}
            </Card.Body>
          </Card>
        </Container>
      ) : null}
    </>
  );
};

export { Profile };
