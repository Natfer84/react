import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [pokemonList, setpokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((responde) => responde.json())
      .then((data) => {
        const pokemonDetails = [];

        data.results.forEach((pokemon, index) => {
          fetch(pokemon.url)
            .then((responde) => responde.json())
            .then((details) => {
              pokemonDetails.push({
                name: pokemon.name,
                image: details.sprites.front_default,
              });

              if (pokemonDetails.length === data.results.length) {
                setpokemonList(pokemonDetails);
                setLoading(false);
              }
            });
        });
      });
  }, []);

  if (loading) {
    <p>Cargando Pokémon...</p>;
  }

  return (
    <div>
      <h2>Lista de pokémon</h2>
      <div>
        {pokemonList.map((pokemon, index) => (
          <div key={index}>
            <div>{pokemon.name}</div>
            <img src={pokemon.image} alt={pokemon.name}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
