<script>
	import Footer from "../components/footer.svelte";
	import "../app.css";
	import Nav from "../components/nav.svelte";
</script>

<main class="max-w-6xl mx-auto p-8">
	<Nav />
	<slot />
	<Footer />
</main>

<style>
</style>
