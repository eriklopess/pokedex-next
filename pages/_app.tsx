import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider, useDispatch} from "react-redux";
import store from "@/redux/store";
import {useEffect} from "react";
import {getAllPokemons} from "@/services/api";
import {setPokemons} from "@/redux/Pokemons.slice";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
