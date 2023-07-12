import { createContext, useEffect, useState } from "react";
import { api } from "./Api";
// import { useNavigate } from "react-router-dom";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [copyPokemons, setCopyPokemons] = useState([]);
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
  }, [limit, offset]);

  const searchPokemon = async (pokemonName) => {
    console.log("name", pokemonName);
    try {
      const response = await api.get(`${pokemonName}`);
      setPokemons([response.data]);
    } catch (error) {
      alert("no encontrado");
    }
  };
  
  const viewAllPokemons = () => {
    setPokemons(copyPokemons);
  };

  return (
    <PokemonContext.Provider
      value={{
        loading,
        pokemons,
        searchPokemon,
        viewAllPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
