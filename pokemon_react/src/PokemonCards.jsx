import React from "react";

export const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>

      <h1 className="pokemon-name">{pokemonData.name}</h1>

      <div className="pokemon-highlight">
        {pokemonData.types.map((currPokemon, index) => (
          <span key={index} className="type-badge">
            {currPokemon.type.name}
          </span>
        ))}
      </div>

      <div className="grid-three-cols">
        <div className="stat-block">
          <span className="stat-label">Height</span>
          <p>{pokemonData.height}</p>
        </div>

        <div className="stat-block">
          <span className="stat-label">Weight</span>
          <p>{pokemonData.weight}</p>
        </div>

        <div className="stat-block">
          <span className="stat-label">Speed</span>
          <p>{pokemonData.stats[5].base_stat}</p>
        </div>
      </div>

      <div className="grid-three-cols">
        <div className="stat-block">
          <span className="stat-label">Experience</span>
          <p>{pokemonData.base_experience}</p>
        </div>

        <div className="stat-block">
          <span className="stat-label">Attack</span>
          <p>{pokemonData.stats[1].base_stat}</p>
        </div>

        <div className="stat-block">
          <span className="stat-label">Abilities</span>
          <p>
            {pokemonData.abilities
              .map((currPokemon) => currPokemon.ability.name)
              .join(", ")}
          </p>
        </div>
      </div>
    </li>
  );
};
