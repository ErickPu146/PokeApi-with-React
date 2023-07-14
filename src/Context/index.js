import { createContext, useEffect, useState } from "react";
import { api } from "./Api";
// import { useNavigate } from "react-router-dom";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [copyPokemons, setCopyPokemons] = useState([]);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(1);
  //   const navigate = useNavigate()
  const pokemonsList = [];
  let limit = 9;

  const fetchData = async (id) => {
    try {
      const response = await api.get(`${id}`);
      pokemonsList.push(response.data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const fetchPokemons = async () => {
    console.log(offset);
    for (let i = offset; i <= offset + limit; i++) {
      await fetchData(i);
    }
    setLoading(false);
    setPokemons(pokemonsList);
    setCopyPokemons(pokemonsList);
  };

  useEffect(() => {
    fetchPokemons(offset, limit);
  }, [offset]);

  const listSearchEvery = ["todos", "every", "everyone", "completos"];

  const searchPokemon = async (pokemonName) => {
    if (listSearchEvery.some((value) => value === pokemonName)) {
      viewAllPokemons();
    } else {
      try {
        const response = await api.get(`${pokemonName}`);
        setPokemons([response.data]);
        return "ok";
      } catch (e) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    }
  };

  const viewAllPokemons = () => {
    setPokemons(copyPokemons);
  };

  console.log("offset", offset);

  const backPage = () => {
    setOffset(offset - 10);
    setLoading(true);
  };

  const nextPage = () => {
    setOffset(offset + 10);
    setLoading(true);
  };

  return (
    <PokemonContext.Provider
      value={{
        loading,
        setLoading,
        pokemons,
        searchPokemon,
        viewAllPokemons,
        error,
        fetchPokemons,
        backPage,
        nextPage,
        offset,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
