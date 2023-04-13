import {Inter} from 'next/font/google'
import {useEffect} from "react";
import {getAllPokemons} from "@/services/api";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {setPokemons} from "@/redux/Pokemons.slice";
import {RootState} from "@/redux/store";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        if(!localStorage.getItem('pokemons')) {
            getAllPokemons(20).then((response) => {
                dispatch(setPokemons(response))
                console.log(response)
                localStorage.setItem('pokemons', JSON.stringify(response))
            })
        } else {
            dispatch(setPokemons(JSON.parse(localStorage.getItem('pokemons')!)))
        }
    }, [])
    const pokemons = useSelector((state: RootState) => state.pokemon)
    return (
        <main>
            <h1>Pokedex by <Link href="https://github.com/eriklopess" target="_blank">Erik Lopes</Link></h1>
            <div className="grid max-sm:grid-cols-3 grid-cols-6 gap-4 p-10">
                {
                    pokemons.length == 0 ? "Loading..." : pokemons.map((pokemon, index) => (
                        <Link href={`/pokemon/${pokemon.name}`}>
                            <div key={index} className="p-2 flex flex-col justify-evenly items-center h-[250px] bg-slate-800 rounded-xl">
                                <h2 className="capitalize text-xl">{pokemon.name}</h2>
                                <img src={pokemon.sprites!.front_default} alt={pokemon.name}
                                     className="mx-auto w-full"/>
                                <div>
                                    {
                                        pokemon.types.map((pokemon, index) => (
                                            <span className={"p-2 uppercase text-sm rounded mx-1 " + pokemon.type.name}
                                                  key={index}>{pokemon.type.name}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </main>
    )
}
