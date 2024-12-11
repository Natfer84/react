import React, { useEffect, useState } from "react";
import Product from "./component/Product";

const FetchData = () => {
  const [pokemonList, setpokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (product) => {
    setpokemonList([...pokemonList, product]);
  };

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
      <h2>Lista de Pokémon</h2>
      <div>
        {pokemonList.map((product, index) => (
            <Product 
             key={product.id}
             product={product}
             onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default FetchData;
