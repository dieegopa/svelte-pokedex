<script>
	export let pokeman;
	import { fade, fly } from "svelte/transition";
	import { next } from "../stores/globalstore";
</script>

<a
	class="bg-orange-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-md flex flex-col items-center p-5 hover:scale-95"
	href={`/pokemon/${pokeman.id + $next}`}
	in:fly={{ y: 200, duration: 1000 }}
	out:fade
>
	<img src={pokeman.image} alt={pokeman.name} class="h-40 w-40" />
	<p class="first-letter:uppercase font-bold text-lg">{pokeman.name}</p>
</a>

<style>
</style>
