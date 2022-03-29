<script>
	import imagen from "../assets/untitled1.png";
	import Icon from "svelte-icons-pack/Icon.svelte";
	import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="space-y-5">
	<p class="text-center">Created by</p>
	<a
		class="text-center font-bold text-2xl underline block hover:text-orange-500 duration-300 transition-all"
		href="https://diegopa.com"
		target="blank">Diego Padilla</a
	>
	<div class="flex justify-center">
		<img src={imagen} alt="Diego Padilla" class="h-96" />
	</div>
	<div class="flex justify-center space-x-1 items-center text-orange-500 font-bold text-xl ">
		<Icon src={AiFillGithub} color="#ea580c" />
		<a
			href="https://github.com/dieegopa/svelte-pokedex"
			class="block text-center hover:text-orange-800 transition-all duration-300 ease-in-out"
			target="blank">Github Repository</a
		>
	</div>
</div>

<style>
</style>
