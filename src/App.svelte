<script>
	import Home from "./Home/Home.svelte";
	import Transition from "./transition/Transition.svelte";
	import { linkProg, actualPath } from "./stores/link.js";
	import urlChangeInit from "./transition/urlChange.js";
	import { onMount } from "svelte";
	import Projets from "./Projets/Projets.svelte";
	import Competences from "./Competences/Competences.svelte";
	import Experiences from "./Experiences/Experiences.svelte";
	import Contact from "./Contact/Contact.svelte";
	onMount(urlChangeInit);
</script>

<main>
	<Home />
	{#if $linkProg > 0}
		<div class="plan">
			<Transition>
				{#if $actualPath == "/projets"}
					<Projets />
				{:else if $actualPath == "/competences"}
					<Competences />
				{:else if $actualPath == "/experiences"}
					<Experiences />
				{:else if $actualPath == "/contact"}
					<Contact />
				{:else}
					<p>404: {$actualPath} not registered</p>
				{/if}
			</Transition>
		</div>
	{/if}
</main>

<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 100%;
	}

	.plan {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		overflow-x: hidden;
	}
</style>
