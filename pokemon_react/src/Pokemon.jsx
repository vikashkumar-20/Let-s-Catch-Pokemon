import { PokemonCards } from "./PokemonCards";
import React, { useEffect, useState } from "react";
import './index.css'

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async () => {
       
        try {
            const res = await fetch(API);
            const data = await res.json();
            

            const detailedPokemonData = data.results.map( async (currPokemon) => {
                const res = await fetch(currPokemon.url)
                const data = await res.json();
                return data;
            });

            console.log(detailedPokemonData);

            const detailedResponses = await Promise.all(detailedPokemonData);
            console.log(detailedResponses);
            setPokemon(detailedResponses);
            setLoading(false);   
        }
        catch(error) {
            setLoading(false);
            setError(error);
        }
        
    }


    useEffect(() => {
        fetchPokemon();
    }, [])


    //search functionality 
    const searchData = pokemon.filter((currPokemon) => 
        currPokemon.name.toLowerCase().includes(search.toLocaleLowerCase()));


    if(loading)
    {
        return <div>
            <p>
                Loading..
            </p>
        </div>
    }

    if(error)
    {
        return <div>
            <h1>{error.message}</h1>
        </div>
    }

    
    return (
        <section className="container">
            <header>
                <h1>Let's Catch Pokémon</h1>
            </header>
            <div className="pokemon-search">
                <input 
                type="text" 
                name="" 
                id=""
                placeholder="Search Pokémon"
                onChange={(e) => setSearch(e.target.value)} 
                value={search}/>
            </div>
            <div>
                <ul className="cards">
                    {
                        // pokemon.map((currPokemon) => { 
                        searchData.map((currPokemon) => { 
                            return <PokemonCards key={currPokemon.id} pokemonData={currPokemon}/>
                        })
                    }
                </ul>
            </div>
        </section>
    );
}