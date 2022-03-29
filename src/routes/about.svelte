<script>
	import imagen from "../assets/untitled1.png";
</script>

<svelte:head>
	<title>Acerca</title>
</svelte:head>

<div class="space-y-5">
    <p class="text-center">Created by</p>
	<a class="text-center font-bold text-2xl underline block hover:text-orange-500 duration-300 transition-all" href="https://diegopa.com" target="blank">Diego Padilla</a>
	<div class="flex justify-center">
		<img src={imagen} alt="Diego Padilla" class="h-96" />
	</div>
</div>

<style>
</style>
