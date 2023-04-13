import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import pokemon from './Pokemons.slice';

const store = configureStore({
    reducer: {
        pokemon: pokemon.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;