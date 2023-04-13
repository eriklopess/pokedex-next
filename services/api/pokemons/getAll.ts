import {handleGetPokemon, handleGetRequest} from "@/services/api";
import PokemonData from "@/interfaces/Pokemon.interface";

export default async function getAll(limit: number = 50, offset: number = 0) {
    const data = await handleGetRequest(`pokemon?limit=${limit}&offset=${offset}`);
    const pokemons = data.results.map((pokemon: PokemonData) => handleGetPokemon(pokemon.url));
    return Promise.all(pokemons);
}