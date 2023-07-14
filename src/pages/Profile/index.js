import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../Context/Api";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { ReturnButton } from "../../components/ReturnButton";
import { PokemonContext } from "../../Context";
import { PokemonsLoading } from "../../components/PokemonsLoading";
import "./profile.css";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

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
        <Container
          className="my-5 text-center"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <ReturnButton />
          <Row>
            <Col
              md={6}
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-delay="15"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <h1 className="pokemon-name pokemon-info">{pokemon.name}</h1>

              <Card border="warning" className="position-relative opacity-50">
                <Card.Body>
                  <Card.Title className="pokemon-info abilities mb-3">
                    Habilidades
                  </Card.Title>
                  {pokemon.abilities?.map((element, index) => (
                    <p key={index} className="content">
                      {index + 1}. {element.ability.name}
                    </p>
                  ))}
                  <Card.Title className="pokemon-info abilities mb-3">
                    Experiencia base
                  </Card.Title>
                  <p className="content">{pokemon.base_experience}</p>
                  <Card.Title className="pokemon-info abilities mb-3">
                    Peso
                  </Card.Title>
                  <p className="content">{pokemon.weight}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center position-relative"
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-delay="15"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              {/* <img
                src={pokemon.sprites?.other.dream_world.front_default}
                className="img-responsive"
              /> */}
              <Carousel>
                <Carousel.Item>
                  <img
                    className="w-100 img-responsive"
                    src={pokemon.sprites?.other.dream_world.front_default}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="w-100 img-responsive"
                    src={pokemon.sprites?.other.home.front_default}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="w-100 img-responsive"
                    src={pokemon.sprites?.other.home.front_shiny}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  );
};

export { Profile };
