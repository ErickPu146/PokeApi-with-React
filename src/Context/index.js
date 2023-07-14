import { createContext, useEffect, useState } from "react";
import { api } from "./Api";
// import { useNavigate } from "react-router-dom";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [copyPokemons, setCopyPokemons] = useState([]);
  const [error, setError] = useState(false);
  //   const navigate = useNavigate()
  const pokemonsList = [];
  let limit = 17;
  let offset = 1;

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
    for (let i = offset; i <= limit; i++) {
      await fetchData(i);
    }
    setLoading(false);
    setPokemons(pokemonsList);
    setCopyPokemons(pokemonsList);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

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
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
