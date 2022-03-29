<script context="module">
	export async function load({ params }) {
		const id = params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();

		return { props: { pokeman } };
	}
</script>

<script>
	export let pokeman;
	const type = pokeman.types[0].type.name;

	const titulo = pokeman.name;
	const nameCapitalized = titulo.charAt(0).toUpperCase() + titulo.slice(1);
</script>

<svelte:head>
	<title>{nameCapitalized}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-center text-4xl mb-8 first-letter:uppercase font-bold">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:
		<strong>{pokeman.weight}</strong>
	</p>
	<img src={pokeman.sprites["front_default"]} alt={pokeman.name} class="h-60 w-60" />
	<a
		class="bg-orange-500 px-3 py-2 rounded-md text-white hover:scale-105 transition-all duration-300 hover:bg-orange-400"
		href="/">Volver</a
	>
</div>

<style>
</style>
