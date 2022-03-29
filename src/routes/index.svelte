<script>
	import { firstPokemon, pokemon } from "../stores/pokestore";
	import { fade } from "svelte/transition";
	import { next, previous } from "../stores/globalstore";
	import PokeCard from "../components/pokeCard.svelte";
	import Icon from "svelte-icons-pack/Icon.svelte";
	import AiOutlineArrowLeft from "svelte-icons-pack/ai/AiOutlineArrowLeft";
	import AiOutlineArrowRight from "svelte-icons-pack/ai/AiOutlineArrowRight";
	import AiFillHome from "svelte-icons-pack/ai/AiFillHome";

	let searchInput = "";

	let filteredPokemons = [];

	$: {
		if (searchInput.trim() !== "") {
			filteredPokemons = $pokemon.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
			);
		} else {
			filteredPokemons = $firstPokemon;
		}
	}

	const handleHome = () => {
		const obtenerPokemon = async () => {
			const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;

			previous.update(() => 0);
			next.update(() => 0);

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

			firstPokemon.update(() => pokemonData);
		};

		obtenerPokemon();
	};

	const handleNext = () => {
		const obtenerPokemon = async () => {
			previous.update(($next) => $next);
			next.update(($next) => $next + 20);
			next.set($next + 20);
			const url = `https://pokeapi.co/api/v2/pokemon/?offset=${$next}&limit=20`;

			const response = await fetch(url);
			const data = await response.json();
			const pokemonData = data.results.map((data, index) => {
				return {
					id: index + 1,
					name: data.name,
					image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
						index + 1 + $next
					}.png`
				};
			});

			firstPokemon.update(() => pokemonData);
		};

		obtenerPokemon();
	};

	const handlePrevious = () => {
		const obtenerPokemon = async () => {
			previous.update(($next) => $next - 20);
			next.update(($next) => $next - 20);
			next.set($next - 20);
			const url = `https://pokeapi.co/api/v2/pokemon/?offset=${$next}&limit=20`;

			const response = await fetch(url);
			const data = await response.json();
			const pokemonData = data.results.map((data, index) => {
				return {
					id: index + 1,
					name: data.name,
					image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
						index + 1 + $next
					}.png`
				};
			});

			firstPokemon.update(() => pokemonData);
		};

		obtenerPokemon();
	};
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<div transition:fade>
	<h1 class="font-bold text-4xl text-center mb-10">Svelte Pokedex</h1>

	<input
		type="text"
		bind:value={searchInput}
		class="w-full mb-5 border-2 border-orange-500 rounded-md p-1 px-3"
		placeholder="Search..."
	/>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each filteredPokemons as pokeman}
			<PokeCard {pokeman} />
		{/each}
	</div>

	{#if searchInput === ""}
		<div class="flex justify-center mt-10 space-x-5">
			{#if $next !== 0}
				<button
					transition:fade
					on:click={handleHome}
					class="bg-orange-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-md flex flex-col items-center p-5 hover:scale-95"
					><Icon src={AiFillHome} className="text-2xl outline-2" /></button
				>
				<button
					transition:fade
					on:click={handlePrevious}
					class="bg-orange-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-md flex flex-col items-center p-5 hover:scale-95"
					><Icon src={AiOutlineArrowLeft} className="text-2xl outline-2" /></button
				>
			{/if}
			<button
				on:click={handleNext}
				class="bg-orange-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-md flex flex-col items-center p-5 hover:scale-95"
				><Icon src={AiOutlineArrowRight} className="text-2xl outline-2" /></button
			>
		</div>
	{/if}
</div>

<style>
</style>
