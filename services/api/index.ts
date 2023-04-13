import getAll from "@/services/api/pokemons/getAll";
import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const handleGetRequest = (path: string) => {
    return axios.get(BASE_URL + path).then(res => res.data);
}

export const handleGetPokemon = (url: string) => {
    return axios.get(url).then(res => res.data);
}

export {
    getAll as getAllPokemons
}