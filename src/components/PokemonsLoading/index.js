import "./PokemonsLoading.css";

const PokemonsLoading = () => {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle loader d-flex">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export { PokemonsLoading };