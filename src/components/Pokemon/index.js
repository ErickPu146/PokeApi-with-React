import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <tr>
        <td>{pokemon.id}</td>
        <td>{pokemon.name}</td>
        <td>
        {pokemon.past_types[0]?.generation.name ? pokemon.past_types[0].generation.name : 'No tiene generacion'}
        </td>
        <td>{pokemon.base_experience}</td>
        <td>{pokemon.weight}</td>
        <td className="d-flex justify-content-center">
          <Link to={`/profile/${pokemon.id}`} className="btn btn-warning"><i className="bi bi-info-lg"></i></Link>
        </td>
      </tr>
    </>
  ); 
};

export { Pokemon };
