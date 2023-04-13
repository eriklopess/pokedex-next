import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Pokemon({pokemon}: any) {
    const {query} = useRouter()
    const pokemons = useSelector((state: RootState) => state.pokemon)
    const pokemonData = pokemons.find((pokemon: any) => pokemon.name === query.name)
    if (!pokemonData) return <h1>Loading...</h1>
    return (
        <main>
            <h1 className="text-xl text-center capitalize mt-20 text-4xl">{pokemonData.name}</h1>
            <div className="w-full flex items-start">
                <Swiper pagination={true} loop={true} modules={[Pagination]} className="mySwiper w-1/4" autoplay={
                    {
                        delay: 3000,
                        disableOnInteraction: false,
                    }
                }
                >
                    <SwiperSlide>
                        <img src={pokemonData.sprites!.front_default} alt={pokemonData.name} className="w-full"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pokemonData.sprites!.back_default} alt={pokemonData.name} className="w-full"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pokemonData.sprites!.front_shiny} alt={pokemonData.name} className="w-full"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pokemonData.sprites!.back_shiny} alt={pokemonData.name} className="w-full"/>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className="flex w-full items-center justify-evenly mb-20">
                <div>
                    <h2 className="text-xl mb-2">Types</h2>
                    {
                        pokemonData.types.map((pokemon: any, index: number) => (
                            <span className={"p-2 uppercase text-sm rounded mr-1 " + pokemon.type.name}
                                  key={index}>{pokemon.type.name}</span>
                        ))
                    }
                </div>
                <div>
                    <h2 className="text-xl mb-2">Abilities</h2>
                    {
                        pokemonData.abilities.map((pokemon: any, index: number) => (
                            <span className={"mr-2 uppercase text-sm rounded bg-slate-800 text-white p-2"}
                                  key={index}>{pokemon.ability.name}</span>
                        ))
                    }
                </div>
                <div>
                    <h2 className="text-xl mb-2">Weight</h2>
                    <span className="p-2 uppercase text-sm rounded text-2xl">{pokemonData.weight}</span>
                </div>
            </div>
            <div className="block w-full mb-20">
                <h2 className="text-2xl text-center">Stats</h2>
                <div className="grid grid-cols-3 gap-10 px-10">
                    {
                        pokemonData.stats.map((pokemon: any, index: number) => (
                            <div key={index}>
                                <h3 className="text-xl capitalize">{pokemon.stat.name.replace("-", " ")}</h3>
                                <div className="flex items-center">
                                    <div className="w-full h-2 bg-gray-200 rounded flex w-3/4 mr-4">
                                        <div className="h-2 bg-blue-500 rounded"
                                             style={{width: `${pokemon.base_stat}%`}}></div>
                                    </div>
                                    <span>{
                                        pokemon.base_stat
                                    }</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="p-10 text-center">
                <h2 className="text-2xl mb-10">Moves</h2>
                <div className="grid grid-cols-8 gap-4 text-left">
                    {
                        pokemonData.moves.map((pokemon: any, index: number) => (
                            <div key={index}>
                                <h3 className={"text-xl capitalize "}>{pokemon.move.name.replace("-", " ")}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}