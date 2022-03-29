import { writable } from "svelte/store";

export const pokemon = writable([]);
export const firstPokemon = writable([]);

const obtenerPokemon = async () => {
	const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898";
	const response = await fetch(url);
	const data = await response.json();
	const pokemonData = data.results.map((data, index) => {
		return {
			id: index + 1,
			name: data.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	pokemon.set(pokemonData);
};

const obtenerPokemonPrimeraPagina = async () => {
	const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
	const response = await fetch(url);
	const data = await response.json();
	const pokemonData = data.results.map((data, index) => {
		return {
			id: index + 1,
			name: data.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	firstPokemon.set(pokemonData);
};

obtenerPokemon();
obtenerPokemonPrimeraPagina();
