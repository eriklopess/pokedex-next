import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const store = createSlice({
    name: 'pokemons',

    initialState: [],

    reducers: {
        setPokemons: (state: any[], { payload }: PayloadAction<any>) => {
            payload.forEach((pokemon: any) => {
                state.push(pokemon);
            });
            localStorage.removeItem('pokemons');
            localStorage.setItem('pokemons', JSON.stringify(state));
        },
    },
});

export default store;
export const { setPokemons } = store.actions;